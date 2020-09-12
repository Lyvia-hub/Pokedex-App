import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { PokeAPIUrl, PokeAPIData } from './pokeAPI';
import { queryPaginated } from './pagination';


@Injectable({
  providedIn: 'root'
})
export class PokemonsService {
  id: number;
  isAvailable: boolean;
  name: string;

  /**
   * Injection of HttpClient into the Service
   *
   */
  constructor(private http: HttpClient) { }

  private baseUrl = 'https://pokeapi.co/api/v2/pokemon/';


  // Fetch Pokemons
  getPokemons(limit: number, offset: number): Observable<PokeAPIUrl> {
    return this.http.get<PokeAPIUrl>(`${this.baseUrl}?limit=${limit}&offset=${offset}`);
  }

  // Get all data from each pokemon's url
  getDataFromUrl(result: string): Observable<PokeAPIData> {
    return this.http.get<PokeAPIData>(result);
  }

  // Search and filter results
  list(urlOrFilter?: string | object): Observable<PokeAPIUrl> {
    return queryPaginated<PokeAPIUrl>(this.http, this.baseUrl, urlOrFilter);
  }

  // Get Pokemon Data by id
  // getPokemonFullDescription(id: number): Observable<pokeAPIData> {
  //   return this.http.get<pokeAPIData>(`${this.baseUrl}${id}/`
  //   );
  // }

  // searchPokemons(term: string): Observable<PokeAPIData> {
  //   if (!term.trim()) { // si champs de recherche vide
  //     return of([]); // retourner un tableau vide
  //   }

  //   return this.http.get<PokeAPIData>(`${this.baseUrl}/?name=${term}`);
  // }

  // Get all pokemon types in a List
  getPokemonTypes(): Array<string> {
    return [
      'grass', 'fire', 'water', 'bug', 'normal', 'electric',
      'poison', 'fairy', 'flying', 'ground', 'psychic'
    ];
  }
}
