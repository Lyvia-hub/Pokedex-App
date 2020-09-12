import { Pipe, PipeTransform } from '@angular/core';

/**
 * Display color corresponding to Pokemon type (materialize classes)
 * Params: Pokemon type
 * Exemple :
 *    {{ pokemon.type | pokemonTypeColor }}
 */

@Pipe({
  name: 'pokemonTypeColor'
})
export class PokemonTypeColorPipe implements PipeTransform {

  transform(type: string): string {
    let color: string;

    switch (type) {
      case 'fire':
        color = 'red lighten-1';
        break;
      case 'water':
        color = 'blue lighten-1';
        break;
      case 'grass':
        color = 'green lighten-1';
        break;
      case 'bug':
        color = 'brown lighten-1';
        break;
      case 'normal':
        color = 'grey lighten-3';
        break;
      case 'flying':
        color = 'blue lighten-3';
        break;
      case 'poison':
        color = 'deep-purple accent-1';
        break;
      case 'fairy':
        color = 'pink lighten-4';
        break;
      case 'psychic':
        color = 'deep-purple darken-2';
        break;
      case 'electric':
        color = 'lime accent-1';
        break;
      case 'ground':
        color = 'deep-orange';
        break;
      default:
        color = 'grey';
        break;
    }

    return 'chip ' + color;
  }

}
