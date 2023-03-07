import jwt from 'jsonwebtoken';
const APP_SECRET = process.env.APP_SECRET ?? 'abc123';
export const generateToken = (userId) => {
    return jwt.sign({ userId }, APP_SECRET, { expiresIn: '24h' });
};
export const resolvers = {
    Query: {
        getPets: async (parent, args, context) => {
            const pets = context.db.pet.findMany();
            return pets;
        },
    },
    Mutation: {
        login: async (parent, args, context) => {
            const { email } = args;
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
            });
            return {
                user,
                token: generateToken(user.id)
            };
        },
    },
};
