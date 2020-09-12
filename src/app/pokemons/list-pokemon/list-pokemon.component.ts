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
  listPokemons: Pokemon[] = [];
  offset = 0;

  // selectedPokemon: Pokemon = new Pokemon();
  // searchText: string;
  // id_select: number;

  constructor(
    private router: Router,
    private pokemonsService: PokemonsService) { }

  ngOnInit(): void {
    // Permet d'afficher tous les pokémons
    this.getPokemons();
    this.getListPokemons();
  }

  getPokemons(): void {
    this.pokemonsService.getPokemons(20, this.offset).subscribe(results => {
      this.offset += 20;
      console.log(results);
      // tslint:disable-next-line: forin
      for (const i in results.results as any) {
        console.log(results.results[i]);
        console.log(results.results[i].url);
        this.pokemonsService
          .getDataFromUrl(results.results[i].url)
          // tslint:disable-next-line: no-shadowed-variable
          .subscribe(results => {
            const displayedPokemon = new Pokemon();
            displayedPokemon.id = results.id;
            displayedPokemon.name = results.name;
            displayedPokemon.sprites = results.sprites;

            const typeList: string[] = [];
            // tslint:disable-next-line: forin
            for (const j in results.types) {
              typeList.push(results.types[j].type.name);

            }
            displayedPokemon.types = typeList;
            this.pokemons.push(displayedPokemon);
            console.log(displayedPokemon);
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

  getListPokemons(): void {
    this.pokemonsService.getPokemons(800, 0).subscribe(results => {
      // tslint:disable-next-line: forin
      for (const i in results.results as any) {
        const displayedPokemon: Pokemon = new Pokemon();
        displayedPokemon.id = +i + 1;
        displayedPokemon.name = results.results[i].name;
        this.listPokemons.push(displayedPokemon);
      }
    });
  }

  // Permet d'accéder au détail concernant le pokémon sélectionné (-> autre composant)

}

