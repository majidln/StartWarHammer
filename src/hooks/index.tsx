import {gql, useQuery} from '@apollo/client';

const GET_LIST = gql`
  query getItems($search: String) {
    starships(where: {_search: $search}) {
      id
      name
    }
    persons(where: {_search: $search}) {
      id
      name
    }
    planets(where: {_search: $search}) {
      id
      name
    }
  }
`;

export const useGetList = (
  variables: Object = {search: ''},
): any | undefined => {
  return useQuery(GET_LIST, {
    variables,
  });
};
