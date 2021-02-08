export interface Entity {
  id: String;
  name: String;
}

export interface Starship extends Entity {}
export interface Person extends Entity {}
export interface Planet extends Entity {}

export interface ResponsePage {
  starships: Array<Starship>;
  persons: Array<Person>;
  planets: Array<Planet>;
}

export interface QueryResponse {
  data: ResponsePage | undefined;
  loading: Boolean;
  error: Object | undefined;
}
