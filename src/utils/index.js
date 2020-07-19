import { extractFragmentReplacements } from "prisma-binding";
import schema from "../Schema";

const FragmentReplacements=extractFragmentReplacements(schema);

export  {FragmentReplacements}
