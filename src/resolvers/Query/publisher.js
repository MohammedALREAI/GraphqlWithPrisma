const PublisherQuery = {

     publishers: async (parent, args, ctx, info) => {
          return await ctx.prisma.query.publisher({}, info)
     },
     publisher: async (parent, args, ctx, info) => {
          return await ctx.prisma.query.publisherS({
               where: {
                    id: args.id
               }
          }, info)


     },

}
export default PublisherQuery;
