import { Component, OnInit } from '@angular/core';
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
  pokemon: Pokemon = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private pokemonsService: PokemonsService) { }

  ngOnInit(): void {
    // this.pokemons = this.pokemonsService.getPokemons();

    const id = +this.route.snapshot.paramMap.get('id');
    // this.pokemonsService.getPokemon(id)
    //   .subscribe(pokemon => this.pokemon = pokemon);
  }

  // Fonction retour à la liste des cartes des pokemons
  goBack(): void {
    this.router.navigate(['/pokemons']);
  }

}
