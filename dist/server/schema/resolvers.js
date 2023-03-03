export const resolvers = {
    Query: {
        getPets: async (parent, args, context) => {
            const pets = context.db.pet.findMany();
            return pets;
        },
    },
};
