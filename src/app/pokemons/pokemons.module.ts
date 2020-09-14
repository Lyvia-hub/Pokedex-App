import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NgxPaginationModule } from 'ngx-pagination';

import { PokemonRoutingModule } from './pokemon-routing.module';

import { ListPokemonComponent } from './list-pokemon/list-pokemon.component';
import { DetailPokemonComponent } from './detail-pokemon/detail-pokemon.component';

import { PokemonTypeColorPipe } from './pokemon-type-color.pipe';

import { PokemonsService } from './pokemons.service';
import { LoaderPokemonComponent } from '../loader-pokemon/loader-pokemon.component';


@NgModule({
  declarations: [
    ListPokemonComponent,
    DetailPokemonComponent,
    LoaderPokemonComponent,
    PokemonTypeColorPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgxPaginationModule,
    PokemonRoutingModule
  ],
  providers: [
    PokemonsService
  ]
})
export class PokemonsModule { }
