import { Chain } from '@angular/compiler';

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
  flavour_text_entries: Array<object>;
  habitat: string;
}
