const UserQuery={
     async users(parent,args,ctx,info){
          return ctx.prisma.users({},info);
     },
async user(parent,args,ctx,info){
     return ctx.prisma.user({where:{
          id:args.id
     }},info);
},
}

export default UserQuery;
