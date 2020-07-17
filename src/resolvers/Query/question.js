const QuestionsQuery = {

     questions: async (parent, args, ctx, info) => {
          return await ctx.prisma.query.questions({}, info)
     },
     question: async (parent, args, ctx, info) => {
          return await ctx.prisma.query.questions({
               where: {
                    id: args.id
               }
          }, info)


     },

}
export default QuestionsQuery;
