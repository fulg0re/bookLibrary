const { gql } = require('apollo-server');

const UserMutation = gql`
  input CreateUserInput {
    username: String,
    password: String,
    confirmPassword: String,
    email: String,
    firstName: String,
    lastName: String
  }

  type Mutation {
    createUser(input: CreateUserInput!): UserType!
  }
`;

module.exports = { UserMutation };