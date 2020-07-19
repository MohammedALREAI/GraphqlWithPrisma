import { AuthErrorMessage } from "../../utils/ErrorMesage";


module.exports = {
     Query: {
     questions: async (parent, args, ctx, info) => {
          const isUser = ctx.getUser();

          if (!isUser) {
               AuthErrorMessage()
          }
          return await ctx.prisma.query.questions({}, info)
     },
     question: async (parent, args, ctx, info) => {
          const isUser = ctx.getUser();

          if (!isUser) {
               AuthErrorMessage()
          }
          return await ctx.prisma.query.questions({
               where: {
                    id: args.id
               }
          }, info)


     },

}}
