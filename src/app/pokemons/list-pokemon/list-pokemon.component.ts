import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  // listPokemons: Pokemon[] = [];
  // searchText: string;

  constructor(
    private router: Router,
    private pokemonsService: PokemonsService) { }

  ngOnInit(): void {
    this.getPokemons();
    // this.getListPokemons();
  }

  getPokemons(): void {
    this.pokemonsService.getPokemons(151, this.offset).subscribe(results => {
      this.offset += 300;
      console.log(results);
      // tslint:disable-next-line: forin
      for (const res in results.results as any) {
        // console.log(results.results[res]);
        // console.log(results.results[res].url);
        this.pokemonsService
          .getDataFromUrl(results.results[res].url)
          .subscribe(data => {
            // console.log(data);
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
            // console.log(displayedPokemon);
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

  // Click on a Pokemon card to consult description
  onselectPokemon(pokemon: Pokemon) {
    let link = ['/pokemon', pokemon.id];
    this.router.navigate(link);
  }












  // getListPokemons(): void {
  //   this.pokemonsService.getPokemons(800, 0).subscribe(results => {
  //     // tslint:disable-next-line: forin
  //     for (const res in results.results as any) {
  //       const displayedPokemon: Pokemon = new Pokemon();
  //       displayedPokemon.id = +res + 1;
  //       displayedPokemon.name = results.results[res].name;
  //       this.listPokemons.push(displayedPokemon);
  //     }
  //   });
  //}

}

