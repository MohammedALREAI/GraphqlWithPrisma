import UserQuery from "./Query/user";

import UserQuery from "./Query/user";
import{
      vedioQuery,
      UserQuery,
      AuthorQuery,
      BookQuery,
      CategoryQuery,
      classRoomQuery,
      CoursesQuery,
      PublisherQuery,
      bookTestsQuery,
      PublisherQuery,
      SubjectsQuery,
      QuestionsQuery
          } from "./Query/index";

const Query={
     ...vedioQuery,
     ...UserQuery,
     ...AuthorQuery,
     ...BookQuery,
     ...CategoryQuery,
     ...classRoomQuery,
     ...CoursesQuery,
     ...PublisherQuery,
     ...bookTestsQuery,
     ...PublisherQuery,
     ...SubjectsQuery,
     ...QuestionsQuery




}
export default Query;
