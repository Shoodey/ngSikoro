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
var pokemon_ucfirst_pipe_1 = require("../pipes/pokemon-ucfirst.pipe");
var pokemon_service_1 = require("../shared/pokemon.service");
var PokemonCreateComponent = (function () {
    function PokemonCreateComponent(_pokemonService) {
        this._pokemonService = _pokemonService;
        this.title = "Nouveau pokémon";
        this.types = ["plante", "eau", "feu", "electrique"];
    }
    PokemonCreateComponent.prototype.save = function (e, valid, value) {
        var _this = this;
        e.preventDefault();
        this._pokemonService.savePokemon(value)
            .subscribe(function (pokemon) { return _this.pokemon = pokemon; }, function (error) { return _this.errorMessage = error; });
    };
    PokemonCreateComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/pokemon-create/pokemon-create.component.html',
            styleUrls: ['app/pokemon-create/pokemon-create.component.css'],
            pipes: [pokemon_ucfirst_pipe_1.PokemonUcfirstPipe]
        }), 
        __metadata('design:paramtypes', [pokemon_service_1.PokemonService])
    ], PokemonCreateComponent);
    return PokemonCreateComponent;
}());
exports.PokemonCreateComponent = PokemonCreateComponent;
//# sourceMappingURL=pokemon-create.component.js.map