
import { getSlug } from 'speakingurl'
import {AuthErrorMessage} from'../../utils/ErrorMesage'

module.exports = {
     Mutation: {

      createclassRooms:async(parent, args, ctx, info)=> {
          const isUser = ctx.getUser();
          const slug = getSlug(args.data.slug)

          if (!isUser) {
              AuthErrorMessage()
          }

          // useer is login
          return await ctx.prisma.mutation.createclassRooms({
               data: {
                    ...args,
                    slug,
                    isListed: true,
                    status: 1
               }
          }, info)


     },

     ///update Authore done
      updateclassRooms:async(parent, args, ctx, info)=> {
          const id = args.id;
          const isUser = ctx.getUser(args.data.slug);
          const slug = getSlug(args.data.slug);
          if (!isUser) {
              AuthErrorMessage()
          }
          return await ctx.prisma.mutation.updateclassRooms({
               where: {
                    id
               },
               data: {
                    ...args,
                    slug
               }
          }, info);

     },

      deleteclassRooms:async(parent, args, ctx, info)=> {
          const id = args.id;
          if (!ctx.getUser) {
AuthErrorMessage()
          }

          return await ctx.prisma.mutation.deleteclassRooms({
               where: {
                    id
               }
          }, info)




     }
}
}
