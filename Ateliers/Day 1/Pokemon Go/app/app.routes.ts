import {provideRouter, RouterConfig} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {PokemonListComponent} from "./pokemon-list/pokemon-list.component";
import {PokemonCreateComponent} from "./pokemon-create/pokemon-create.component";
import {PageNotFoundComponent} from "./404/404.component";

const routes: RouterConfig = [
    { path: '', component: HomeComponent },
    { path: 'pokemons', component: PokemonListComponent },
    { path: 'pokemons/create', component: PokemonCreateComponent },
    { path: '**', component: PageNotFoundComponent }
];

export const AppRouterProviders = [
    provideRouter(routes)
];
