const { startSuitServer } = require('./graphql-flg-suit');
const typeDefs = require('./gql/typeDefs');
const resolvers = require('./gql/resolvers');

startSuitServer(typeDefs, resolvers);
