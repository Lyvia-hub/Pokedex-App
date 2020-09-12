import { Pipe, PipeTransform } from '@angular/core';

/**
 * Affiche la couleur correspondant au type du pokémon (classes materialize)
 * Prend en argument le type du pokémon.
 * Exemple d'utilisation:
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
      case 'Fée':
        color = 'pink lighten-4';
        break;
      case 'psy':
        color = 'deep-purple darken-2';
        break;
      case 'electrik':
        color = 'lime accent-1';
        break;
      case 'Combat':
        color = 'deep-orange';
        break;
      default:
        color = 'grey';
        break;
    }

    return 'chip ' + color;
  }

}
