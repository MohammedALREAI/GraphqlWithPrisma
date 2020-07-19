import prisma from "./prisma";
require("dotenv").config();
import { GraphQLServer } from "graphql-yoga";

import { FragmentReplacements } from "./utils/index";
import schema from "./Schema";
import {getUser} from'./utils/getUser'

const server= new GraphQLServer({
     schema,
     context:(request)=>{
return {prisma,request,getUser}
     },
     FragmentReplacements
})
;
const PORT = 5000;
server.start((PORT) => {
    console.log(`Server is now running on port http://localhost:${PORT}`);
  }
);
