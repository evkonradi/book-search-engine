import gql from 'graphql-tag';

export const GET_ME = gql`
  {
    me {
        username
        email
        savedBooks{
          title
          description
          bookId
          image
          link
          authors
        }
      }
  }
`;