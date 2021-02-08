import {gql, useQuery} from '@apollo/client';

const GET_LIST = gql`
  query {
    starships {
      id
      name
    }
    persons {
      id
      name
    }
    planets {
      id
      name
    }
  }
`;

export const useGetList = (): any | undefined => {
  return useQuery(GET_LIST, {});
};
