export default (Mutation = {

add

});

{
id: ID! @ID
title:String!description:String!
      isPublished: Boolean! @default(value: false)
status:Int
videos:[video!]!  @relation(name:"vidoes", onDelete: CASCADE)
videoUrl:String!
status:Int!
isListed:Boolean @defaoult(value:flase)

createdAt:DateTime! @createdAt
updatedAt:DateTime! @updatedAt
}
