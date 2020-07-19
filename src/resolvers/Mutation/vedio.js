

import { getSlug } from 'speakingurl'
import {AuthErrorMessage} from'../../utils/ErrorMesage'

module.exports = {
     Mutation: {
      createVedio:async(parent, args, ctx, info)=> {
          const isUser = ctx.getUser();
          const slug = getSlug(args.data.slug)

          if (!isUser) {
              AuthErrorMessage()
          }

          // useer is login
          return await ctx.prisma.mutation.createVedio({
               data: {
                    ...args,
                    slug,
                    isListed: true,
                    status: 1
               }
          }, info)


     },

     ///update Authore done
      updateVedio:async(parent, args, ctx, info)=> {
          const id = args.id;
          const isUser = ctx.getUser(args.data.slug);
          const slug = getSlug(args.data.slug);
          if (!isUser) {
              AuthErrorMessage()
          }
          return await ctx.prisma.mutation.updateVedio({
               where: {
                    id
               },
               data: {
                    ...args,
                    slug
               }
          }, info);

     },

      deleteVedio:async(parent, args, ctx, info)=> {
          const id = args.id;
          if (!ctx.getUser) {
AuthErrorMessage()
          }

          return await ctx.prisma.mutation.deleteVedio({
               where: {
                    id
               }
          }, info)




     }
}
}
