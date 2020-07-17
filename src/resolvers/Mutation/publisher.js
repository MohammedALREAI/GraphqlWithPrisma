const PublisherQuery={

publishers:async(parent, args, ctx, info)=>{
     return await ctx.prisma.query.publishers({},info)
},
 publisher:async(parent, args, ctx, info)=>{
      return await ctx.prisma.query.publisher({where:{
           id:args.id
      }},info)


 },

}
export default PublisherQuery;
