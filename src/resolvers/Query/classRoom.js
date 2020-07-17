const classRoomQuery = {

     classRooms: async (parent, args, ctx, info) => {
          return await ctx.prisma.query.classRooms({}, info)
     },
     classRoom: async (parent, args, ctx, info) => {
          return await ctx.prisma.query.classRoom({
               where: {
                    id: args.id
               }
          }, info)


     },

}
export default classRoomQuery;
