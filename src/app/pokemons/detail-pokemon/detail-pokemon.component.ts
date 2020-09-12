import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

import { Pokemon } from '../pokemon';

import { PokemonsService } from '../pokemons.service';

@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html',
  styleUrls: ['./detail-pokemon.component.css']
})
export class DetailPokemonComponent implements OnInit {

  // Pokémon à afficher à l'utilisateur
  pokemon: Pokemon;
  selectedPokemon: Pokemon = new Pokemon();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private pokemonsService: PokemonsService) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.selectedPokemon.id = id;

    this.getSelectedPokemon(this.selectedPokemon);
  }

  getSelectedPokemon(pokemon: Pokemon) {
    console.log(pokemon.id);
    this.pokemonsService.getPokemonData(pokemon.id)
      .subscribe(data => {
        console.log(data);
        this.selectedPokemon.id = data.id;
        console.log(data.id);
        this.selectedPokemon.name = data.name;
        console.log(data.name);
        this.selectedPokemon.height = data.height;
        console.log(data.height);
        this.selectedPokemon.weight = data.weight;
        console.log(data.weight);

        const pokemonTypes: string[] = [];
        for (let type in data.types) {
          pokemonTypes.push(data.types[type].type.name);
        }
        this.selectedPokemon.types = pokemonTypes;
        console.log(pokemonTypes);


        this.selectedPokemon.sprites = data.sprites;
        console.log(data.sprites);
        // console.log('data: ' + data);
      });
  }

  // Fonction retour à la liste des cartes des pokemons
  goBack(): void {
    this.router.navigate(['/pokemons']);
  }

}
