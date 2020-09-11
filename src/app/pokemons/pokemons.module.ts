import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PokemonRoutingModule } from './pokemon-routing.module';

import { ListPokemonComponent } from './list-pokemon/list-pokemon.component';
import { DetailPokemonComponent } from './detail-pokemon/detail-pokemon.component';
import { BorderCardDirective } from './border-card.directive';
import { PokemonTypeColorPipe } from './pokemon-type-color.pipe';
import { PokemonFormComponent } from './pokemon-form/pokemon-form.component';

import { PokemonsService } from './pokemons.service';
import { SearchPokemonComponent } from './search-pokemon/search-pokemon.component';
import { LoaderPokemonComponent } from '../loader-pokemon/loader-pokemon.component';



@NgModule({
  declarations: [
    ListPokemonComponent,
    DetailPokemonComponent,
    SearchPokemonComponent,
    PokemonFormComponent,
    LoaderPokemonComponent,
    BorderCardDirective,
    PokemonTypeColorPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    PokemonRoutingModule
  ],
  providers: [
    PokemonsService
  ]
})
export class PokemonsModule { }
