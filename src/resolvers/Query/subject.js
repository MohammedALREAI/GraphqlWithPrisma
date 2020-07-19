const { AuthErrorMessage } = require("../../utils/ErrorMesage");


module.exports = {
     Query: {     subjects: async (parent, args, ctx, info) => {
          const isUser = ctx.getUser();

          if (!isUser) {
               AuthErrorMessage()
          }
          return await ctx.prisma.query.subjects({}, info)
     },
     subject: async (parent, args, ctx, info) => {
          const isUser = ctx.getUser();

          if (!isUser) {
               AuthErrorMessage()
          }
          return await ctx.prisma.query.subject({
               where: {
                    id: args.id
               }
          }, info)


     },

}
}
