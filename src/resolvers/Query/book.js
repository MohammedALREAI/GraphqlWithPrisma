// where: OrderItemWhereInput, orderBy: OrderItemOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int
const BookQuery = {

     books: async (parent, {query,filter,skip,orderBy}, ctx, info) => {
c
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
            publisher,
            author,
            couress,
            publiserYear,
            publisher,
            classRoom,
            catogory,
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
export default BookQuerybook;
