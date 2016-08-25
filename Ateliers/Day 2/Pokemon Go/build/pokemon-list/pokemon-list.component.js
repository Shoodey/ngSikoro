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
var pokemon_ucfirst_pipe_1 = require("../pipes/pokemon-ucfirst.pipe");
var pokemon_weight_pipe_1 = require("../pipes/pokemon-weight.pipe");
var pokemon_height_pipe_1 = require("../pipes/pokemon-height.pipe");
var pokemon_filter_pipe_1 = require("../pipes/pokemon-filter.pipe");
var rarity_component_1 = require("../shared/rarity/rarity.component");
var PokemonListComponent = (function () {
    function PokemonListComponent() {
        this.title = "Liste des Pokémons";
        this.pokemons = [
            {
                "name": "pikachu",
                "code": "025",
                "type": "electrique",
                "weight": 6,
                "height": 0.41,
                "rarity": 3.5,
                "image": "assets/img/pikachu.png"
            },
            {
                "name": "carapuce",
                "code": "025",
                "type": "eau",
                "weight": 5.4,
                "height": 0.41,
                "rarity": 2,
                "image": "assets/img/squirtle.png"
            },
            {
                "name": "salamèche",
                "code": "025",
                "type": "feu",
                "weight": 3.2,
                "height": 0.41,
                "rarity": 4.5,
                "image": "assets/img/charmander.png"
            },
        ];
        this.imageState = false;
    }
    PokemonListComponent.prototype.toggleImage = function () {
        this.imageState = !this.imageState;
    };
    PokemonListComponent.prototype.onRarityClicked = function (rarity) {
        console.log(rarity);
    };
    PokemonListComponent = __decorate([
        core_1.Component({
            selector: 'pokemon-list',
            templateUrl: "app/pokemon-list/pokemon-list.component.html",
            styleUrls: ["app/pokemon-list/pokemon-list.component.css"],
            pipes: [pokemon_ucfirst_pipe_1.PokemonUcfirstPipe, pokemon_weight_pipe_1.PokemonWeightPipe, pokemon_height_pipe_1.PokemonHeightPipe, pokemon_filter_pipe_1.PokemonFilterPipe],
            directives: [common_1.NgSwitch, common_1.NgSwitchCase, common_1.NgSwitchDefault, rarity_component_1.PokemonRarityComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], PokemonListComponent);
    return PokemonListComponent;
}());
exports.PokemonListComponent = PokemonListComponent;
//# sourceMappingURL=pokemon-list.component.js.map