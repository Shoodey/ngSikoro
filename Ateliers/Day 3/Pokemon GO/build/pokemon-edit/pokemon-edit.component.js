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
var pokemon_service_1 = require("../shared/pokemon.service");
var router_1 = require("@angular/router");
var PokemonEditComponent = (function () {
    function PokemonEditComponent(_pokemonService, _route) {
        this._pokemonService = _pokemonService;
        this._route = _route;
        this.types = ["plante", "eau", "feu", "electrique"];
    }
    PokemonEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.params
            .map(function (params) { return params['id']; })
            .subscribe(function (id) {
            _this._pokemonService.getPokemon(id)
                .subscribe(function (data) { return _this.pokemon = data; }, function (error) { return console.log(error); });
        });
    };
    PokemonEditComponent.prototype.edit = function (id, form) {
        var _this = this;
        this._pokemonService.editPokemon(id, form.value)
            .subscribe(function (data) { return _this.pokemon = data; }, function (error) { return console.log(error); });
    };
    PokemonEditComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/pokemon-edit/pokemon-edit.component.html',
            styleUrls: ['app/pokemon-edit/pokemon-edit.component.css'],
        }), 
        __metadata('design:paramtypes', [pokemon_service_1.PokemonService, router_1.ActivatedRoute])
    ], PokemonEditComponent);
    return PokemonEditComponent;
}());
exports.PokemonEditComponent = PokemonEditComponent;
//# sourceMappingURL=pokemon-edit.component.js.map