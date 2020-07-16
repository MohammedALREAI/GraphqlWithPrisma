import {GraphQLServer  } from "graphql-yoga";
import prisma from "./prisma";
require('dotenv').config({ path: '../.env' });
import { FragmentReplacements,resolver } from "./resolvers";


const server= new GraphQLServer({
     typeDefs:"./schema.graphql",
     resolver,
     context:(request)=>{
return {prisma,request}
     },
     FragmentReplacements
})
;
const PORT = 5000;
server.start((PORT) => {
    console.log(`Server is now running on port http://localhost:${PORT}`);
  }
);
