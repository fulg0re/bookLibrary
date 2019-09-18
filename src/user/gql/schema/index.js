const { UserType } = require('./User');
const { UserQuery } = require('./query');
const { UserMutation } = require('./mutation');

module.exports = [ UserType, UserQuery, UserMutation ];
