const { ApolloServer } = require("@apollo/server");
const { Query } = require("@nestjs/common");
const { listen } = require("node:quic");
const { start } = require("node:repl");

const books = [
  {
    title: 'The Awakening',
    author: 'Kate Chopin',
  },
  {
    title: 'City of Glass',
    author: 'Paul Auster',
  },
];

const resolvers = {
    Query:{
        books: () => books,
    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers,
})

const {url} = await startStandaloneServer(server, {
    listen: {port: 5000},
})

console.log(`Server ready at ${url}`);