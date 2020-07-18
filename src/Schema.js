const path = require("path");
const { makeExecutableSchema } = require("graphql-tools");
import { mergeTypeDefs, mergeResolvers } from '@graphql-tools/merge';
import { loadFilesSync } from '@graphql-tools/load-files';



const typeDefs = loadFilesSync(
  path.join(__dirname, "./resolvers/schema/*.graphql")
);
const resolvers = loadFilesSync(path.join(__dirname, "./resolvers/**/*.js"));


const schema = makeExecutableSchema({
     typeDefs: mergeTypeDefs(typeDefs),
     resolvers: mergeResolvers(resolvers),
});

export default schema;
