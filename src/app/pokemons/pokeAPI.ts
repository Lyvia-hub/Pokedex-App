export class PokeAPIUrl {
  count: number; // total number of items
  next: string; // URL of the next page
  previous: string; // URL of the previous page
  results: Array<object>; // data of the current page
}

export class PokeAPIData {
  // Pokemon data from the API (non-exhaustive)
  id: number;
  name: string;
  height: number;
  weight: number;
  types: object;
  sprites: object;

}
