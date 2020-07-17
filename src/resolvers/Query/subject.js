const SubjectsQuery = {

     subjects: async (parent, args, ctx, info) => {
          return await ctx.prisma.query.subjects({}, info)
     },
     subject: async (parent, args, ctx, info) => {
          return await ctx.prisma.query.subject({
               where: {
                    id: args.id
               }
          }, info)


     },

}
export default SubjectsQuery;
