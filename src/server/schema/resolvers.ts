import { ServerContext, LoginArgs } from '../../types.js';
import jwt from 'jsonwebtoken'
import { GraphQLError } from 'graphql';

const APP_SECRET = process.env.APP_SECRET ?? 'abc123'

export const generateToken = (userId: string) => {
  return jwt.sign({ userId }, APP_SECRET, { expiresIn: '24h' });
};

export const resolvers = {
  Query: {
    getPets: async (parent: unknown, args: {}, context: ServerContext) => {
      const pets = context.db.pet.findMany();
      return pets;
    },
  },

  Mutation: {
    login: async (parent: unknown, args: LoginArgs, context: ServerContext) => {
      const { email } = args
      // probably want to do some bcrypt stuff here or determine if i need to do this on the client, probably not though
      // check if passwords match, ect
      const user = await context.db.user.findUnique({
        where: { email },
        select: {
          id: true,
          name: true,
          email: true,
          username: true,
          type: true
        }
      })
      
      if (!user) {
        return Promise.reject(
          new GraphQLError(`🚫 That user doesn't seem to exist.`)
        );
      }

      return {
        user,
        token: generateToken(user.id)
      }
    },
  },
};
