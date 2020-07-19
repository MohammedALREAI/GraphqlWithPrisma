import { AuthErrorMessage } from '../../utils/ErrorMesage'


module.exports = {
     Query: {
           authors: async (parent, args, ctx, info) => {
          const isUser = ctx.getUser();

          if (!isUser) {
               AuthErrorMessage()
          }

          return await ctx.prisma.query.authors({}, info)
     },
     author: async (parent, args, ctx, info) => {
          const isUser = ctx.getUser();

          if (!isUser) {
               AuthErrorMessage()
          }
          const {id}=args.id;
          return await ctx.prisma.query.author({
               where: {
                    id
               }
          }, info)


     },

}
}
