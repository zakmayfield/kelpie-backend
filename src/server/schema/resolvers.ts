import { ServerContext } from '../../types.js';

export const resolvers = {
  Query: {
    getPets: async (parent: unknown, args: {}, context: ServerContext) => {
      const pets = context.db.pet.findMany();
      return pets;
    },
  },
};
