

import { getSlug } from 'speakingurl'
import {AuthErrorMessage} from'../../utils/ErrorMesage'

module.exports = {
     Mutation: {

          createPubliserYear:async(parent, args, ctx, info)=> {
    const isUser = ctx.getUser();
    const slug = getSlug(args.data.slug);

    if (!isUser) {
      AuthErrorMessage();
    }

    // useer is login
    return await ctx.prisma.mutation.createPubliserYear(
      {
        data: {
          ...args,
          slug,
          isListed: true,
          status: 1,
        },
      },
      info
    );
  },

  ///update Authore done
   updatePubliserYear:async(parent, args, ctx, info)=> {
    const id = args.id;
    const isUser = ctx.getUser(args.data.slug);
    const slug = getSlug(args.data.slug);
    if (!isUser) {
      AuthErrorMessage();
    }
    return await ctx.prisma.mutation.updateCatogory(
      {
        where: {
          id,
        },
        data: {
          ...args,
          slug,
        },
      },
      info
    );
  },

   deletePubliserYear:async(parent, args, ctx, info)=> {
    const id = args.id;
    if (!ctx.getUser) {
      AuthErrorMessage();
    }

    return await ctx.prisma.mutation.deleteCatogory(
      {
        where: {
          id,
        },
      },
      info
    );
  },
}}
