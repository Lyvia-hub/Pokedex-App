export class Pokemon {
  id: number;
  name: string;
  sprites: object;
  types: Array<string>;
  height: number;
  weight: number;
  species: Array<object>;
  chain: object;
  evolution_chain: object;
  evolvesTo: Array<object>;
  evolutionName: string;
  back_default: string;
  front_default: string;
  flavor_text_entries: Array<object>;
  habitat: string;
  evolves_from_species: string;

  constructor(
    id?: number,
    name?: string,
    sprites?: Object,
    types?: string[],
    height?: number,
    weight?: number,
    species?: Array<object>,
    chain?: object,
    evolution_chain?: object,
    evolvesTo?: Array<object>,
    evolutionName?: string,
    back_default?: string,
    front_default?: string,
    flavor_text_entries?: Array<object>,
    habitat?: string,
    evolves_from_species?: string,
  ) {
    this.id = id;
    this.name = name;
    this.sprites = sprites;
    this.types = types;
    this.height = height;
    this.weight = weight;
    this.species = species;
    this.chain = chain;
    this.evolution_chain = evolution_chain;
    this.evolvesTo = evolvesTo;
    this.evolutionName = evolutionName;
    this.back_default = back_default;
    this.front_default = front_default;
    this.flavor_text_entries = flavor_text_entries;
    this.habitat = habitat;
    this.evolves_from_species = evolves_from_species;
  }
}
