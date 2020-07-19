
import { getSlug } from 'speakingurl'
import {AuthErrorMessage} from'../../utils/ErrorMesage'
module.exports = {
     Mutation: {
      createAuthor:async(parent,args,ctx,info)=>{
const isUser=ctx.getUser(args.data.slug);
const slug=getSlug(args.data.slug)

if(!isUser){
     AuthErrorMessage()
}


          return await ctx.prisma.mutation.createAuthor({
               data:{
                    ...args.data,
                    slug,
                    isListed:true,
                    status:1
               }
          },info)


     },

     ///update Authore done
      updateAuthor:async(parent, args, ctx, info)=>{
          const id =args.id;
          const isUser = ctx.getUser(args.data.slug);
          const slug = getSlug(args.data.slug);
          if(!isUser) AuthErrorMessage()
          return await ctx.prisma.mutation.updateAuthor({where:{
               id
          },
          data:{
               ...args.data,
               slug
          }},info);

     },

      deleteAuthor: async(parent,args,ctx,info)=>{
          const id = args.id;
          if(!ctx.getUser){
               throw new Error("you should be login ")

          }

          return await ctx.prisma.deleteAuthor({
               where:{
                 id
               }
          },info)}}}





