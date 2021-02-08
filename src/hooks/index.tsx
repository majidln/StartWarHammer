import {gql, useQuery} from '@apollo/client';

export const GET_LIST = gql`
  query getItems($search: String) {
    starships(where: {_search: $search}, orderBy: name_ASC) {
      id
      name
    }
    persons(where: {_search: $search}, orderBy: name_ASC) {
      id
      name
    }
    planets(where: {_search: $search}, orderBy: name_ASC) {
      id
      name
    }
  }
`;

const GET_STARSHIP_DETAIL = gql`
  query getStarshipDetail($id: ID) {
    starship(where: {id: $id}) {
      name
      id
      crew
      length
      films {
        id
        title
      }
    }
  }
`;

export const GET_PERSON_DETAIL = gql`
  query getStarshipDetail($id: ID) {
    person(where: {id: $id}) {
      id
      name
      height
      mass
      films {
        id
        title
      }
      homeworld {
        id
        name
      }
    }
  }
`;

export const GET_PLANET_DETAIL = gql`
  query getStarshipDetail($id: ID) {
    planet(where: {id: $id}) {
      id
      name
      population
      gravity
    }
  }
`;

export const useGetList = (variables: Object = {search: ''}): any => {
  return useQuery(GET_LIST, {
    variables,
  });
};

export const useGetDetail = (
  variables: Object,
  type: String,
): any | undefined => {
  let query;
  if (type === 'Starship') {
    query = GET_STARSHIP_DETAIL;
  } else if (type === 'Person') {
    query = GET_PERSON_DETAIL;
  } else {
    query = GET_PLANET_DETAIL;
  }

  return useQuery(query, {
    variables,
  });
};
