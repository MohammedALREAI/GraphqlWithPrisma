const CategoryQuery = {

     catogorys: async (parent, args, ctx, info) => {
          return await ctx.prisma.query.catogorys({}, info)
     },
     catogory: async (parent, args, ctx, info) => {
          return await ctx.prisma.query.catogory({
                    where: {
                         id: args.id
                    }
               }, info)


     },

}
export default CategoryQuery;
