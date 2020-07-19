const { AuthErrorMessage } = require("../../utils/ErrorMesage");


module.exports = {
     Query: {
     bookTests: async (parent, args, ctx, info) => {
          const isUser = ctx.getUser();

          if (!isUser) {
               AuthErrorMessage()
          }
          return await ctx.prisma.query.bookTests({}, info)
     },
     bookTest: async (parent, args, ctx, info) => {

          return await ctx.prisma.query.bookTest
({
               where: {
                    id: args.id
               }
          }, info)


     },

}

}
