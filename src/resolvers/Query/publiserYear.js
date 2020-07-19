import { AuthErrorMessage } from "../../utils/ErrorMesage";


module.exports = {
     Query: {
     publiserYears: async (parent, args, ctx, info) => {
          const isUser = ctx.getUser();

          if (!isUser) {
               AuthErrorMessage()
          }
          return await ctx.prisma.query.publiserYears({}, info)
     },
     publiserYear: async (parent, args, ctx, info) => {
          const isUser = ctx.getUser();

          if (!isUser) {
               AuthErrorMessage()
          }
          return await ctx.prisma.query.publiserYear({
               where: {
                    id: args.id
               }
          }, info)


     },

}

}
