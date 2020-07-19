

import { getSlug } from 'speakingurl'
import { AuthErrorMessage } from '../../utils/ErrorMesage';

module.exports = {
     Mutation: {

     createpublisher:async(parent, args, ctx, info)=> {
const isUser=ctx.getUser(args.data.slug);
const slug=getSlug(args.data.slug)

if(!isUser)AuthErrorMessage()

          return await ctx.prisma.mutation.createpublisher({
               data:{
                    ...args,
                    slug,
                    isListed:true,
                    status:1
               }
          },info)


     },

     ///update Authore done
      updatepublisher:async(parent, args, ctx, info)=> {
          const id =args.id;
          const isUser = ctx.getUser(args.data.slug);
          const slug = getSlug(args.data.slug);
          if(!isUser){
                    throw new Error("you should be login ")
          }
          return await ctx.prisma.mutation.updatepublisher({where:{
               id
          },
          data:{
               ...args.data,
               slug
          }},info);

     },

          deletepublisher: async (parent, args, ctx, info) => {
          const id = args.id;
          if(!ctx.getUser){
               throw new Error("you should be login ")

          }

          return await ctx.prisma.mutation.deletepublisher({
               where:{
                 id
               }
          },info)




     }
}
}
