import { join } from "path";
const { makeExecutableSchema } = require("graphql-tools");
import { mergeTypeDefs, mergeResolvers } from '@graphql-tools/merge';
import { loadFilesSync } from '@graphql-tools/load-files';


const typeDefs = loadFilesSync(
  join(__dirname,'./resolvers/schema/*.graphql')
);
const resolvers = loadFilesSync(join(__dirname, "./resolvers/**/*.js"));
console.log(resolvers.typeDefs)

const schema = makeExecutableSchema({
     typeDefs: mergeTypeDefs(typeDefs),
     resolvers: mergeResolvers(resolvers),
});

export default schema;
