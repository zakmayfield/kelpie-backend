import jwt from 'jsonwebtoken';
const APP_SECRET = process.env.APP_SECRET ?? 'keep it secret, keep it safe';
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
            console.log('::: args :::', args);
            // probably want to do some bcrypt stuff here
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
