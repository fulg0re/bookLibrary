const { getUser } = require('./User');

const UserQueryResolver = {
  Query: {
    user: (root, args, context, info) => getUser(args.id),
  },
};

module.exports = { UserQueryResolver };
