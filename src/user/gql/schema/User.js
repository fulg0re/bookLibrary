const { gql } = require('apollo-server');

const UserType = gql`
  type UserType {
    username: String
    password: String
    email: String
    firstName: String
    lastName: String
  }
`;

module.exports = { UserType };