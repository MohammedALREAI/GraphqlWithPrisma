

import { getSlug } from 'speakingurl'
import {AuthErrorMessage} from'../../utils/ErrorMesage'

module.exports = {
     Mutation: {
             createQuestions:async(parent, args, ctx, info)=> {
    const isUser = ctx.getUser();
    const slug = getSlug(args.data.slug);

    if (!isUser) {
      AuthErrorMessage();
    }

    // useer is login
    return await ctx.prisma.mutation.createQuestions(
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
   updateQuestions:async(parent, args, ctx, info)=> {
    const id = args.id;
    const isUser = ctx.getUser(args.data.slug);
    const slug = getSlug(args.data.slug);
    if (!isUser) {
      AuthErrorMessage();
    }
    return await ctx.prisma.mutation.updateQuestions(
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

   deleteQuestions:async(parent, args, ctx, info)=> {
    const id = args.id;
    if (!ctx.getUser) {
      AuthErrorMessage();
    }

    return await ctx.prisma.mutation.deleteQuestions(
      {
        where: {
          id,
        },
      },
      info
    );
  },
}}
