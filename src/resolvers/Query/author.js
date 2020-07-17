const AuthorQuery = {

     authors: async (parent, args, ctx, info) => {
          return await ctx.prisma.query.authors({}, info)
     },
     author: async (parent, args, ctx, info) => {
          return await ctx.prisma.query.author({
               where: {
                    id: args.id
               }
          }, info)


     },

}
export default AuthorQuery;
