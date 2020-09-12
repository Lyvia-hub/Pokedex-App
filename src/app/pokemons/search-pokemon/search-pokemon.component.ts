import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';
import { PokemonsService } from '../pokemons.service';
import { Pokemon } from '../pokemon';
import { PokeAPIUrl } from '../pokeAPI';

@Component({
  selector: 'app-search-pokemon',
  templateUrl: './search-pokemon.component.html',
  styleUrls: ['./search-pokemon.component.css']
})
export class SearchPokemonComponent implements OnInit {

  private searchTerms = new Subject<string>();
  // pokemons$: Observable<Pokemon[]>;
  pokeApiUrl: Observable<PokeAPIUrl>;

  constructor(
    private pokemonsService: PokemonsService,
    private router: Router) { }

  // Ajoute un terme de recherche dans le flux de l'Observable 'searchTerms'
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.pokeApiUrl = this.searchTerms.pipe(
      //attendre 300ms de pause entre chaque requête
      debounceTime(300),
      // ignorer la recherche en cours si c'est la même que la précédente
      distinctUntilChanged(),
      // on retourne la liste des résultats correspondants aux termes de la recherche après avoir passé les 2 précédents filtres
      switchMap((term: string) => this.pokemonsService.list(term)),
    );
  }

  gotoDetail(pokemon: Pokemon): void {
    let link = ['/pokemon', pokemon.id];
    this.router.navigate(link);
  }
}
