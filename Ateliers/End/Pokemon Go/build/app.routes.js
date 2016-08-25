"use strict";
var router_1 = require('@angular/router');
var home_component_1 = require("./home/home.component");
var pokemon_list_component_1 = require("./pokemon-list/pokemon-list.component");
var pokemon_create_component_1 = require("./pokemon-create/pokemon-create.component");
var _404_component_1 = require("./404/404.component");
var pokemon_edit_component_1 = require("./pokemon-edit/pokemon-edit.component");
var routes = [
    { path: '', component: home_component_1.HomeComponent },
    { path: 'pokemons', component: pokemon_list_component_1.PokemonListComponent },
    { path: 'pokemons/create', component: pokemon_create_component_1.PokemonCreateComponent },
    { path: 'pokemons/edit/:id', component: pokemon_edit_component_1.PokemonEditComponent },
    { path: '**', component: _404_component_1.PageNotFoundComponent }
];
exports.AppRouterProvider = [
    router_1.provideRouter(routes)
];
//# sourceMappingURL=app.routes.js.map