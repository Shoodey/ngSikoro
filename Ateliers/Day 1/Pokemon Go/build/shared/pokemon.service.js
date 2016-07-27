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
var Observable_1 = require('rxjs/Observable');
var PokemonService = (function () {
    function PokemonService(_http) {
        this._http = _http;
        this._url = "http://localhost/Pokemon/public/api/pokemons";
    }
    PokemonService.prototype.getPokemons = function () {
        return this._http.get(this._url)
            .map(this.extractData)
            .do(function (data) { return console.log("Loaded " + data.length + " pokemons."); })
            .catch(this.handleError);
    };
    PokemonService.prototype.savePokemon = function (pokemon) {
        pokemon.image = "assets/img/" + pokemon.image + ".png";
        return this._http.post(this._url + "/create", pokemon)
            .map(this.extractData)
            .do(function (data) { return console.log("Saved new pokemon"); })
            .catch(this.handleError);
    };
    PokemonService.prototype.extractData = function (response) {
        var body = response.json();
        return body || {};
    };
    PokemonService.prototype.handleError = function (error) {
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable_1.Observable.throw(errMsg);
    };
    PokemonService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], PokemonService);
    return PokemonService;
}());
exports.PokemonService = PokemonService;
//# sourceMappingURL=pokemon.service.js.map