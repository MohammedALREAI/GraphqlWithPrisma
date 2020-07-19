const { AuthErrorMessage } = require("../../utils/ErrorMesage");


module.exports = {
     Query: {          videos:async(parent, args, ctx, info) =>{
          const isUser = ctx.getUser();

          if (!isUser) {
               AuthErrorMessage()
          }
          return await ctx.prisma.query.videos({}, info);
     },
     video:async(parent, args, ctx, info)=> {
          const isUser = ctx.getUser();

          if (!isUser) {
               AuthErrorMessage()
          }
          return await ctx.prisma.query.video({
               where: {
                    id: args.id
               }
          }, info);
     },
}
}
