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
var async_1 = require("@angular/forms/src/facade/async");
var PokemonRarityComponent = (function () {
    function PokemonRarityComponent() {
        this.rarityClickedEvent = new async_1.EventEmitter();
    }
    PokemonRarityComponent.prototype.ngOnChanges = function () {
        this.rarityWidth = this.rarity * 80 / 5;
    };
    PokemonRarityComponent.prototype.onClick = function () {
        this.rarityClickedEvent.emit(this.rarity);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], PokemonRarityComponent.prototype, "rarity", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', async_1.EventEmitter)
    ], PokemonRarityComponent.prototype, "rarityClickedEvent", void 0);
    PokemonRarityComponent = __decorate([
        core_1.Component({
            selector: "pokemon-rarity",
            templateUrl: 'app/shared/rarity/rarity.component.html',
            styleUrls: ['app/shared/rarity/rarity.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], PokemonRarityComponent);
    return PokemonRarityComponent;
}());
exports.PokemonRarityComponent = PokemonRarityComponent;
//# sourceMappingURL=rarity.component.js.map