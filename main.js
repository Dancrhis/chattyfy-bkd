import { ApolloServer, } from "@apollo/server";
import {startStandaloneServer} from "@apollo/server/standalone"
import  resolvers  from "./src/resolvers/resolvers.js";
import  typeDefs  from "./src/types/types.js";
import { DBconnect } from "./src/DBservices/DBconnect.js";

DBconnect();

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = startStandaloneServer(server, {
  listen: {
    port: 8080,
  },
});

console.log("server: ", url);
