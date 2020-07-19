const { AuthErrorMessage } = require("../../utils/ErrorMesage");


module.exports = {
     Query: {
     catogorys: async (parent, args, ctx, info) => {
          const isUser = ctx.getUser();

          if (!isUser) {
               AuthErrorMessage()
          }
          return await ctx.prisma.query.catogorys({}, info)
     },
     catogory: async (parent, args, ctx, info) => {
          const isUser = ctx.getUser();

          if (!isUser) {
               AuthErrorMessage()
          }
          const {id}=args.id
          return await ctx.prisma.query.catogory({
                    where: {
                         id
                    }
               }, info)


     },

}
}
