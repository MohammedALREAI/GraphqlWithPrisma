import { Prisma } from "prisma-binding";

const prisma = new Prisma({
  typeDefs: "src/generated/prisma.graphql",
     endpoint: "https://eu1.prisma.sh/mhamadaa1997/mohammed/dev",
  secret: "mysecretKey",

});
export default prisma;
