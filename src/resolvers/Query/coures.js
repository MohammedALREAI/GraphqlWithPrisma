const CoursesQuery = {

     couress: async (parent, args, ctx, info) => {
          return await ctx.prisma.query.couress({}, info)
     },
     coures: async (parent, args, ctx, info) => {
          return await ctx.prisma.query.coures({
               where: {
                    id: args.id
               }
          }, info)


     },

}
export default CoursesQuerycouress;
