import { Prisma } from "prisma-binding";
const prisma = new Prisma({
  typeDefs: "src/generated/prisma.graphql",
  endpoint: "https://weby-ee924decca.herokuapp.com/graphqwith prisma/dev",
  secret: "mysecretKey",
});
export default prisma;
