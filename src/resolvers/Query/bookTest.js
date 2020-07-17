const bookTestsQuery= {

     bookTests: async (parent, args, ctx, info) => {
          return await ctx.prisma.query.bookTest({}, info)
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
export default bookTestsQuery
;
