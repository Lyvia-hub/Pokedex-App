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
}
