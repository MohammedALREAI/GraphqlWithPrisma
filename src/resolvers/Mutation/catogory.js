

import { getSlug } from 'speakingurl'
import {AuthErrorMessage} from'../../utils/ErrorMesage'
module.exports = {
     Mutation: {
      createCatogory:async(parent, args, ctx, info)=> {
          const isUser = ctx.getUser();
          const slug = getSlug(args.data.slug)

          if (!isUser) {
              AuthErrorMessage()
          }

          // useer is login
          return await ctx.prisma.mutation.createCatogory({
               data: {
                    ...args,
                    slug,
                    isListed: true,
                    status: 1
               }
          }, info)


     },

     ///update Authore done
      updateCatogory:async(parent, args, ctx, info)=> {
          const id = args.id;
          const isUser = ctx.getUser(args.data.slug);
          const slug = getSlug(args.data.slug);
          if (!isUser) {
              AuthErrorMessage()
          }
          return await ctx.prisma.mutation.updateCatogory({
               where: {
                    id
               },
               data: {
                    ...args,
                    slug
               }
          }, info);

     },

      deleteCatogory:async(parent, args, ctx, info)=> {
          const id = args.id;
          if (!ctx.getUser) {
AuthErrorMessage()
          }

          return await ctx.prisma.mutation.deleteCatogory({
               where: {
                    id
               }
          }, info)




     }
}
}
