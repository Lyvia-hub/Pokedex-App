import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { PokeAPIUrl, PokeAPIData } from './pokeAPI';


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
  getPokemonSpeciesData(id: number): Observable<PokeAPIData> {
    return this.http.get<PokeAPIData>(this.speciesUrl + id + '/');
  }

  // Get Chain evolution
  getPokemonNextEvolution(url: string): Observable<PokeAPIData> {
    return this.http.get<PokeAPIData>(url);
  }

  //
  getPokemonByName(name: string): Observable<PokeAPIData> {
    return this.http.get<PokeAPIData>(`${this.baseUrl}${name}/`);
  }

}
