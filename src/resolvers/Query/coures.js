const { AuthErrorMessage } = require("../../utils/ErrorMesage");

module.exports = {
     Query: {
     couress: async (parent, args, ctx, info) => {
          const isUser = ctx.getUser();

          if (!isUser) {
               AuthErrorMessage()
          }
          return await ctx.prisma.query.couress({}, info)
     },
     coures: async (parent, args, ctx, info) => {
          const isUser = ctx.getUser();

          if (!isUser) {
               AuthErrorMessage()
          }
          return await ctx.prisma.query.coures({
               where: {
                    id: args.id
               }
          }, info)


     },

}}

