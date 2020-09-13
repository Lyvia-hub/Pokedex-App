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
  private speciesUrl = 'https://pokeapi.co/api/v2/pokemon-species/';


  // Fetch Pokemons
  getPokemons(limit: number, offset: number): Observable<PokeAPIUrl> {
    return this.http.get<PokeAPIUrl>(`${this.baseUrl}?limit=${limit}&offset=${offset}`);
  }

  // Get all data of each pokemon's url
  getDataFromUrl(result: string): Observable<PokeAPIData> {
    return this.http.get<PokeAPIData>(result);
  }

  // Get Pokemon data via id
  getPokemonData(id: number): Observable<PokeAPIData> {
    return this.http.get<PokeAPIData>(this.baseUrl + id + '/');
  }

  // Get species information
  getPokomonSpeciesData(id: number): Observable<PokeAPIData> {
    return this.http.get<PokeAPIData>(this.speciesUrl + id + '/');
  }

  // Get Chain evolution
  getPokomonNextEvolution(url: string): Observable<PokeAPIData> {
    return this.http.get<PokeAPIData>(url);
  }



  // Search and filter results
  list(urlOrFilter?: string | object): Observable<PokeAPIUrl> {
    return queryPaginated<PokeAPIUrl>(this.http, this.baseUrl, urlOrFilter);
  }













  // searchPokemons(term: string): Observable<PokeAPIData> {
  //   if (!term.trim()) { // si champs de recherche vide
  //     return of([]); // retourner un tableau vide
  //   }

  //   return this.http.get<PokeAPIData>(`${this.baseUrl}/?name=${term}`);
  // }
}
