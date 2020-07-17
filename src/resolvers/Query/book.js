const BookQuery = {

     books: async (parent, args, ctx, info) => {
          return await ctx.prisma.query.books({}, info)
     },
     book: async (parent, args, ctx, info) => {
          return await ctx.prisma.query.book({
               where: {
                    id: args.id
               }
          }, info)


     },

}
export default BookQuerybook;
