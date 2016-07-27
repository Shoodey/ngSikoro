"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
require('rxjs/RX');
var router_1 = require('@angular/router');
var pokemon_service_1 = require("./shared/pokemon.service");
var pokemon_list_component_1 = require("./pokemon-list/pokemon-list.component");
var home_component_1 = require("./home/home.component");
var pokemon_create_component_1 = require("./pokemon-create/pokemon-create.component");
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app',
            templateUrl: 'app/app.component.html',
            styleUrls: ['app/app.component.css'],
            directives: [pokemon_list_component_1.PokemonListComponent, router_1.ROUTER_DIRECTIVES],
            providers: [pokemon_service_1.PokemonService, http_1.HTTP_PROVIDERS],
            precompile: [home_component_1.HomeComponent, pokemon_list_component_1.PokemonListComponent, pokemon_create_component_1.PokemonCreateComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map