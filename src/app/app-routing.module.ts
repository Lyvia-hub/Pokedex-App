import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ListPokemonComponent } from './pokemons/list-pokemon/list-pokemon.component';
import { WelcomeComponent } from './welcome/welcome.component';

// liste des routes sous forme de tableau
const routes: Routes = [
  //   { path: '', redirectTo: 'pokemons', pathMatch: 'full' },
  //   { path: 'welcome', component: WelcomeComponent },
  //   { path: '**', component: PageNotFoundComponent }
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'pokemons', component: ListPokemonComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
