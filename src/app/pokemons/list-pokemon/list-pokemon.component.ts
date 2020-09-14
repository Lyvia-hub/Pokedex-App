import { Component, OnInit } from '@angular/core';

import { Pokemon } from '../pokemon';

import { PokemonsService } from '../pokemons.service';

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
  styleUrls: ['./list-pokemon.component.css']
})
export class ListPokemonComponent implements OnInit {
  public title = 'Pokedex';
  public pokemons: Pokemon[] = [];
  offset: number;
  pokemonId: number;

  /**
   * Pagination Setup
   */

  p = 1;
  totalItems: number;

  constructor(private pokemonsService: PokemonsService) { }

  ngOnInit(): void {
    this.getPokemons();
  }

  /**
   * Get 200 pokemons amoung results from pokeAPI
   */
  getPokemons(): void {
    this.pokemonsService.getPokemons(200, this.offset)
      .subscribe(results => {

        // Pagination attribute
        this.totalItems = results.count;

        this.offset += 50;

        // tslint:disable-next-line: forin
        for (const res in results.results as any) {
          this.pokemonsService
            .getDataFromUrl(results.results[res].url)
            .subscribe(data => {
              // get id / name / sprites / types
              const displayedPokemon = new Pokemon();
              displayedPokemon.id = data.id;
              displayedPokemon.name = data.name;
              displayedPokemon.sprites = data.sprites;

              const typeList: string[] = [];
              // tslint:disable-next-line: forin
              for (const d in data.types) {
                typeList.push(data.types[d].type.name);
              }
              displayedPokemon.types = typeList;
              this.pokemons.push(displayedPokemon);
            });
          // Sorting id (asc)
          setTimeout(() => {
            this.pokemons.sort((a, b) => {
              if (a.id < b.id) return -1;
              if (a.id > b.id) return 1;
              return 0;
            });
          }, 1000);
        }
      });
  }

}

