const { AuthErrorMessage } = require("../../utils/ErrorMesage");


module.exports = {
     Query: {     classRooms: async (parent, args, ctx, info) => {
          const isUser = ctx.getUser();

          if (!isUser) {
               AuthErrorMessage()
          }
          return await ctx.prisma.query.classRooms({}, info)
     },
     classRoom: async (parent, args, ctx, info) => {
          const isUser = ctx.getUser();

          if (!isUser) {
               AuthErrorMessage()
          }
          return await ctx.prisma.query.classRoom({
               where: {
                    id: args.id
               }
          }, info)


     },

}

}
