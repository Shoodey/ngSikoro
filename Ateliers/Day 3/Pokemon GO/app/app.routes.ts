import {RouterConfig, provideRouter} from '@angular/router';
import {PokemonListComponent} from "./pokemon-list/pokemon-list.component";
import {HomeComponent} from "./hom/home.component";
import {PokemonEditComponent} from "./pokemon-edit/pokemon-edit.component";
import {NotFoundComponent} from "./404/notfound.component";
import {PokemonCreateComponent} from "./pokemon-create/pokemon+create.component";

const routes: RouterConfig = [
    {path: '', component: HomeComponent},
    {path: 'pokemons', component: PokemonListComponent},
    {path: 'pokemons/create', component: PokemonCreateComponent},
    {path: 'pokemons/edit/:id', component: PokemonEditComponent},
    {path: '**', component: NotFoundComponent}
];

export const AppRoutes = [provideRouter(routes)]