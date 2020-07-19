import { AuthErrorMessage } from "../../utils/ErrorMesage";


module.exports = {
     Query: {
           users:async(parent,args,ctx,info)=>{
          const isUser = ctx.getUser();

          if (!isUser) {
               AuthErrorMessage()
          }
          return ctx.prisma.users({},info);
     },
async user(parent,args,ctx,info){
     const isUser = ctx.getUser();

     if (!isUser) {
          AuthErrorMessage()
     }
     return ctx.prisma.user({where:{
          id:args.id
     }},info);
},
}

}
