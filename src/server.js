import {GraphQLServer  } from "graphql-yoga";
import prisma from "./prisma";
require("dotenv").config();
import { FragmentReplacements } from "./resolvers";
import schema from "./Schema";



const server= new GraphQLServer({
     schema,
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
