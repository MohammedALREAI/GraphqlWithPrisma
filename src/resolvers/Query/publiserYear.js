const PublisherQuery = {

     publiserYears: async (parent, args, ctx, info) => {
          return await ctx.prisma.query.publiserYears({}, info)
     },
     publiserYear: async (parent, args, ctx, info) => {
          return await ctx.prisma.query.publiserYear({
               where: {
                    id: args.id
               }
          }, info)


     },

}
export default PublisherQuery;
