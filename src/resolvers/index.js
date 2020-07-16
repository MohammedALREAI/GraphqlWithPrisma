import { extractFragmentReplacements } from "prisma-binding";
import Query from "./Query";
import Mutation from "./Mutation";
import Subscription from "./Subscription";

const resolver = {
  Mutation,
  Query
};


const FragmentReplacements=extractFragmentReplacements(resolver);

export  {FragmentReplacements,resolver}
