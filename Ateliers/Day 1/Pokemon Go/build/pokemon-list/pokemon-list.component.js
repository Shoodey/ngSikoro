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
var PokemonListComponent = (function () {
    function PokemonListComponent() {
        this.title = "Liste des Pokémons";
        this.pokemons = [
            {
                "name": "Pikachu",
                "code": "025",
                "type": "electrique",
                "weight": 6,
                "height": 0.41,
                "rarity": 4.5,
                "image": "assets/img/pikachu.png"
            },
            {
                "name": "Carapuce",
                "code": "025",
                "type": "electrique",
                "weight": 6,
                "height": 0.41,
                "rarity": 4.5,
                "image": "assets/img/pikachu.png"
            },
            {
                "name": "Bulbasaur",
                "code": "025",
                "type": "electrique",
                "weight": 6,
                "height": 0.41,
                "rarity": 4.5,
                "image": "assets/img/pikachu.png"
            },
        ];
        this.imageState = false;
    }
    PokemonListComponent.prototype.toggleImage = function () {
        this.imageState = !this.imageState;
    };
    PokemonListComponent = __decorate([
        core_1.Component({
            selector: 'pokemon-list',
            templateUrl: "app/pokemon-list/pokemon-list.component.html",
            styleUrls: ["app/pokemon-list/pokemon-list.component.css"]
        }), 
        __metadata('design:paramtypes', [])
    ], PokemonListComponent);
    return PokemonListComponent;
}());
exports.PokemonListComponent = PokemonListComponent;
//# sourceMappingURL=pokemon-list.component.js.map