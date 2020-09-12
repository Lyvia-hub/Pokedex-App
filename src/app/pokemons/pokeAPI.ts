export class PokeAPIUrl {
  // NamedAPIRessourceList
  count: number;
  next: string;
  previous: string;
  results: Array<object>;
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
