const VedioQuery = {
     videos:async(parent, args, ctx, info) =>{
          return await ctx.prisma.videos({}, info);
     },
     video:async(parent, args, ctx, info)=> {
          return await ctx.prisma.video({
               where: {
                    id: args.id
               }
          }, info);
     },
}

export default VedioQuery;
