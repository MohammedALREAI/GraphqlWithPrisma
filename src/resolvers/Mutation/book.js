


import { getSlug } from 'speakingurl'
import {AuthErrorMessage} from'../../utils/ErrorMesage'

module.exports = {
     Mutation: {

     //create book items
 createBook:async(parent,args,ctx,info)=>{
const {
title,
isbn
,size,
price,
shopeLink,
cover,
photos,
author,
couress,
catagories,
publisherYears,
publishers,
classRooms,
description,
     subjects}=args.data
title=title.toUpperCase();
const isUser=ctx.getUser();
 const slug=getSlug(args.data.slug);

if(!isUser) AuthErrorMessage()

return await ctx.prisma.mutation.createBook(
     {
title,
isbn,
size,
price,
shopeLink,
cover,
          photos:{
               set: photos
},
          authors:{
               connect:{
                    id: authors
     }},
          couress:{
               connect:{
                    id: couress
     }},
          catagories:{
     connect:{
                    id: catagories
     }
},
          publisherYears:{
     connect:{
                    id: publisherYears
     }
},
          publishers:{
     connect:{
                    id: publishers
     }
},
          classRooms:{connect:{
     id: classRooms
}},
description,
subjects:{
     connect:{
          id:subjects
     }
}


          },info)


     },
     // this to upadte item

      updateBook:async(parent, args, ctx, info)=> {
          const id =args.id;
          const isUser = ctx.getUser(args.data.slug);
          const slug = getSlug(args.data.slug);
          if(!isUser)AuthErrorMessage()
          return await ctx.prisma.mutation.updateBook({where:{
               id
          },
          data:{
               ...args.data,slug
          }},info);
     },

     // this to delate item
     async deleteBook(parent,args,ctx,info){
          const id = args.id;
          if(!ctx.getUser)AuthErrorMessage()

          return await ctx.prisma.mutation.deleteBook({
               where:{
                 id
               }
          },info)




     }
}
}
