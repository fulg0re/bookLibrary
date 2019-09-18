const { UserQueryResolver } = require('./query');
const { UserMutationResolver } = require('./mutation');

module.exports = [ UserQueryResolver, UserMutationResolver ];
