"use strict";
var router_1 = require('@angular/router');
var pokemon_list_component_1 = require("./pokemon-list/pokemon-list.component");
var home_component_1 = require("./hom/home.component");
var pokemon_edit_component_1 = require("./pokemon-edit/pokemon-edit.component");
var notfound_component_1 = require("./404/notfound.component");
var pokemon_create_component_1 = require("./pokemon-create/pokemon+create.component");
var routes = [
    { path: '', component: home_component_1.HomeComponent },
    { path: 'pokemons', component: pokemon_list_component_1.PokemonListComponent },
    { path: 'pokemons/create', component: pokemon_create_component_1.PokemonCreateComponent },
    { path: 'pokemons/edit/:id', component: pokemon_edit_component_1.PokemonEditComponent },
    { path: '**', component: notfound_component_1.NotFoundComponent }
];
exports.AppRoutes = [router_1.provideRouter(routes)];
//# sourceMappingURL=app.routes.js.map