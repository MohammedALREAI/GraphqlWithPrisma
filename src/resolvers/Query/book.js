

module.exports = {
     Query: {
     books: async (parent,args , ctx, info) => {
          orderBy
          skip
          first
          const { orderBy, skip, where, first}=args;
          const OptionSearch={}
          const FilterSearch={
               where:{
                    AND:[]
               }
          }
          if(orderBy){
               OptionSearch.orderBy=orderBy;
          }
          if(first){
                              OptionSearch.first = orderBy;

          }
          if (skip) {
            OptionSearch.skip = skip;
          }


          const {
               authors,
               couress,
                publisherYears,
            publisher,
               classRooms,
               catagories,
          } = filter;
          return await ctx.prisma.query.books(
            {
              ...OptionSearch,
              ...FilterSearch,
            },
            info
          );
     },
     book: async (parent, args, ctx, info) => {
          return await ctx.prisma.query.book({
               where: {
                    id: args.id
               }
          }, info)


     },

}
}
