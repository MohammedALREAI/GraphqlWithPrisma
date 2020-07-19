const { AuthErrorMessage } = require("../../utils/ErrorMesage");


module.exports = {
     Query: {
            publishers: async (parent, args, ctx, info) => {
          const isUser = ctx.getUser();

          if (!isUser) {
               AuthErrorMessage()
          }
          return await ctx.prisma.query.publishers({}, info)
     },
     publisher: async (parent, args, ctx, info) => {
          const isUser = ctx.getUser();

          if (!isUser) {
               AuthErrorMessage()
          }
          return await ctx.prisma.query.publisherS({
               where: {
                    id: args.id
               }
          }, info)


     }



}}
