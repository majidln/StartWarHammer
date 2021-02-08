export interface World {
  id: String;
  name: String;
}

export interface Film {
  id: String;
  title: String;
}

export interface Entity {
  id: String;
  name: String;
  __typename: String;
}

export interface Starship extends Entity {
  crew?: Number;
  length?: Number;
  films?: Array<Film>;
}
export interface Person extends Entity {
  height?: Number;
  mass?: Number;
  homeworld?: World;
  films?: Array<Film>;
}
export interface Planet extends Entity {
  population?: Number;
  gravity?: String;
}

export interface ResponsePage {
  starships: Array<Starship>;
  persons: Array<Person>;
  planets: Array<Planet>;
}

export interface QueryResponse {
  data: ResponsePage | undefined;
  loading: Boolean;
  error: Object | undefined;
  refetch: Function;
}
