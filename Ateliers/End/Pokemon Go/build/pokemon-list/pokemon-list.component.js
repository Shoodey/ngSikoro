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
var common_1 = require('@angular/common');
var router_1 = require('@angular/router');
var pokemon_service_1 = require("../shared/pokemon.service");
var rarity_component_1 = require("./../shared/rarity/rarity.component");
var pokemon_filter_pipe_1 = require("../pipes/pokemon-filter.pipe");
var pokemon_weight_pipe_1 = require("../pipes/pokemon-weight.pipe");
var pokemon_height_pipe_1 = require("../pipes/pokemon-height.pipe");
var pokemon_ucfirst_pipe_1 = require("../pipes/pokemon-ucfirst.pipe");
var PokemonListComponent = (function () {
    function PokemonListComponent(_pokemonService) {
        this._pokemonService = _pokemonService;
        this.title = "Liste des pokémons";
        this.showImage = true;
    }
    PokemonListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._pokemonService.getPokemons()
            .subscribe(function (pokemons) { return _this.pokemons = pokemons; }, function (error) { return _this.errorMessage = error; });
    };
    PokemonListComponent.prototype.toggleImage = function () {
        this.showImage = !this.showImage;
    };
    PokemonListComponent.prototype.onRarityClicked = function (message) {
        alert(message);
    };
    PokemonListComponent = __decorate([
        core_1.Component({
            selector: 'pokemon-list',
            templateUrl: 'app/pokemon-list/pokemon-list.component.html',
            styleUrls: ['app/pokemon-list/pokemon-list.component.css'],
            pipes: [pokemon_filter_pipe_1.PokemonFilterPipe, pokemon_weight_pipe_1.PokemonWeightPipe, pokemon_height_pipe_1.PokemonHeightPipe, pokemon_ucfirst_pipe_1.PokemonUcfirstPipe],
            directives: [common_1.NgSwitch, common_1.NgSwitchCase, common_1.NgSwitchDefault, rarity_component_1.PokemonRarityComponent, router_1.ROUTER_DIRECTIVES],
        }), 
        __metadata('design:paramtypes', [pokemon_service_1.PokemonService])
    ], PokemonListComponent);
    return PokemonListComponent;
}());
exports.PokemonListComponent = PokemonListComponent;
//# sourceMappingURL=pokemon-list.component.js.map