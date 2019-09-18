const { createNewUser } = require('./User');

const UserMutationResolver = {
  Mutation: {
    createUser: async (root, args, context, info) => createNewUser(args.input),
  },
};

module.exports = { UserMutationResolver };
