import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import express from 'express';
import http from 'http';
import cors from 'cors';
import bodyParser from 'body-parser';
import { typeDefs, resolvers } from './schema/index.js';
import { PrismaClient } from '@prisma/client';
import { createContext } from '../utils/index.js';
const prisma = new PrismaClient();
const app = express();
const httpServer = http.createServer(app);
const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
});
await server.start();
// Set up our Express middleware to handle CORS, body parsing & expressMiddleware function.
app.use('/', cors({
    origin: ['http://localhost:3000', 'https://studio.apollographql.com'],
    credentials: true
}), bodyParser.json({ limit: '50mb' }), expressMiddleware(server, {
    context: async ({ req, res }) => await createContext(prisma, req, res),
}));
const port = Number.parseInt(process.env.PORT) || 4000;
await new Promise((resolve) => httpServer.listen({ port }, resolve));
console.log(`🚀 Server ready at http://localhost:${port}`);
