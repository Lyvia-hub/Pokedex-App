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
  species: object;
  chain: object;
  evolution_chain: object;
  evolvesTo: Array<object>;
  evolutionName: string;
  back_default: string;
  front_default: string;
  flavour_text_entries: Array<object>;
  habitat: string;
}
