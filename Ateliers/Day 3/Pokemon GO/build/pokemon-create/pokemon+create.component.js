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
var forms_1 = require("@angular/forms");
var common_1 = require("@angular/common");
var custom_validator_1 = require("../shared/validators/custom.validator");
var PokemonCreateComponent = (function () {
    function PokemonCreateComponent(_pokemonService, _formBuilder) {
        this._pokemonService = _pokemonService;
        this._formBuilder = _formBuilder;
        this.title = "Nouveau pokémon";
        this.types = ["plante", "eau", "feu", "electrique", "test"];
        this.pokemonForm = _formBuilder.group({
            name: ['', [common_1.Validators.required, custom_validator_1.CustomValidator.underscoreCheck, custom_validator_1.CustomValidator.isAType]],
            code: [''],
            type: [''],
            image: [''],
            weight: [''],
            height: [''],
            rarity: ['']
        });
    }
    PokemonCreateComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/pokemon-create/pokemon-create.component.html',
            styleUrls: ['app/pokemon-create/pokemon-create.component.css'],
            directives: [forms_1.REACTIVE_FORM_DIRECTIVES],
        }), 
        __metadata('design:paramtypes', [pokemon_service_1.PokemonService, forms_1.FormBuilder])
    ], PokemonCreateComponent);
    return PokemonCreateComponent;
}());
exports.PokemonCreateComponent = PokemonCreateComponent;
//# sourceMappingURL=pokemon+create.component.js.map