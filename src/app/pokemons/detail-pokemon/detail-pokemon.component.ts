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

  pokemon: Pokemon;
  selectedPokemon: Pokemon = new Pokemon();

  evolvedPokemon: Pokemon = new Pokemon();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private pokemonsService: PokemonsService) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.selectedPokemon.id = id;

    this.getSelectedPokemon(this.selectedPokemon);
    this.getPokemonSpecies(this.selectedPokemon);

    this.route.params
      .subscribe(
        (params: Params) => {
          this.evolvedPokemon.id = params['id'];
        });

  }

  /**
   * Display data about selected Pokemon
   */
  getSelectedPokemon(pokemon: Pokemon): void {
    this.pokemonsService.getPokemonData(pokemon.id)
      .subscribe(data => {
        this.selectedPokemon.id = data.id;
        this.selectedPokemon.name = data.name;
        this.selectedPokemon.height = data.height;
        this.selectedPokemon.weight = data.weight;

        const pokemonTypes: string[] = [];
        // tslint:disable-next-line: forin
        for (const type in data.types) {
          pokemonTypes.push(data.types[type].type.name);
        }
        this.selectedPokemon.types = pokemonTypes;

        this.selectedPokemon.sprites = data.sprites;
        this.selectedPokemon.sprites['back_default'] = data.sprites['back_default'];
        this.selectedPokemon.sprites['front_default'] = data.sprites['front_default'];
      });
  }

  /**
   * Get Species data evolution chain url
   * access via species object {name : '', url: '' }
   */
  getPokemonSpecies(pokemon: Pokemon): void {
    this.pokemonsService.getPokemonSpeciesData(pokemon.id)
      .subscribe(data => {
        this.selectedPokemon.habitat = data.habitat['name'];
        if (data.evolves_from_species !== null) {
          this.selectedPokemon.evolves_from_species = data.evolves_from_species['name'];
        } else {
          // this.selectedPokemon.evolves_from_species = null;
          this.selectedPokemon.evolves_from_species = 'X';
        }

        this.selectedPokemon.flavor_text_entries = data.flavor_text_entries[0]['flavor_text'];

        const evolutionUrl = data.evolution_chain['url'];
        const pokemonName = data.name;

        /**
         * Call getPokemonEvolution function with
         * @param pokemonName
         * @param evolutionUrl
         * as arguments
         */
        this.getPokemonEvolution(pokemonName, evolutionUrl);
      });
  }

  /**
   * Get different Pokemon evolution forms with
   * @param pokName
   * @param url
   * as arguments. Both osf them obtain from getPokemonSpecies function
   */
  getPokemonEvolution(pokName: string, url: string) {
    this.pokemonsService.getPokemonNextEvolution(url)
      .subscribe(data => {
        console.log(data);

        /**
         * Get an array of the different evolution species (name)
         */
        const pokemonEvolForms = this.loopEvo(data);

        for (let i = 0; i < pokemonEvolForms.length; i++) {
          if (pokName === pokemonEvolForms[i]) {
            this.selectedPokemon.evolutionName = pokemonEvolForms[i + 1];
            // if (pokemonEvolForms[i + 1] === undefined) {
            //   this.selectedPokemon.evolutionName = 'Last evolution form';
            // }
          }
        }
        console.log(this.selectedPokemon.evolutionName);
        this.getPokemonId(this.selectedPokemon.evolutionName);
      });
  }

  // Get pokemon id via its name
  getPokemonId(name: string) {
    this.pokemonsService.getPokemonByName(name)
      .subscribe(data => {
        console.log('objectif ID');
        console.log(data);
        this.evolvedPokemon.id = data.id;
        console.log(this.evolvedPokemon.id);
      });
  }

  /**
   * Get an Array of the chain Evolution from data.chain (name)
   */
  loopEvo(data: any): any {
    let pokemonEvols = [];
    let evoData = data.chain;

    do {
      // Get number of evolutions
      const numberOfEvolutions = evoData['evolves_to'].length;

      pokemonEvols.push(evoData['species'].name);

      if (numberOfEvolutions > 1) {
        for (let i = 1; i < numberOfEvolutions; i++) {
          pokemonEvols.push(evoData['evolves_to'][i]['species'].name);
        }
      }

      evoData = evoData['evolves_to'][0];

    } while (!!evoData && evoData.hasOwnProperty('evolves_to'));

    return pokemonEvols;
  }

  /**
   * Redirect to List-pokemon view
   */
  goBack(): void {
    this.router.navigate(['/pokemons']);
  }


}
