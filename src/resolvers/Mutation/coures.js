

import { getSlug } from 'speakingurl'

module.exports = {
     Mutation: {

      createCouress:async(parent, args, ctx, info)=> {
          const isUser = ctx.getUser();
          const slug = getSlug(args.data.slug)

          if (!isUser) {
               throw new Error("this user un login plase login or reigester ")
          }

          // useer is login
          return await ctx.prisma.mutation.createCouress({
               data: {
                    ...args,
                    slug,
                    isListed: true,
                    status: 1
               }
          }, info)


     },

     ///update Authore done
      updateCouress:async(parent, args, ctx, info)=> {
          const id = args.id;
          const isUser = ctx.getUser(args.data.slug);
          const slug = getSlug(args.data.slug);
          if (!isUser) {
               throw new Error("you should be login ")
          }
          return await ctx.prisma.mutation.updateCouress({
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
               throw new Error("you should be login ")

          }

          return await ctx.prisma.mutation.deleteCouress({
               where: {
                    id
               }
          }, info)




     }
}
}
