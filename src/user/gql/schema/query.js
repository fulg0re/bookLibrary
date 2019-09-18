const { gql } = require('apollo-server');

const UserQuery = gql`
  type Query {
    user(id: ID!): UserType
  }
`;

module.exports = { UserQuery };