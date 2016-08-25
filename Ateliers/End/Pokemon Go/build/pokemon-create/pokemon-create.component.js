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
var forms_1 = require('@angular/forms');
var custom_validator_1 = require('../validators/custom.validator');
var pokemon_ucfirst_pipe_1 = require("../pipes/pokemon-ucfirst.pipe");
var pokemon_service_1 = require("../shared/pokemon.service");
var PokemonCreateComponent = (function () {
    function PokemonCreateComponent(_pokemonService, _fb) {
        this._pokemonService = _pokemonService;
        this._fb = _fb;
        this.title = "Nouveau pokémon";
        this.types = ["plante", "eau", "feu", "electrique", "test"];
        this.pf = _fb.group({
            name: ['', [common_1.Validators.required, common_1.Validators.minLength(5)]],
            code: ['', [common_1.Validators.required, common_1.Validators.minLength(3), common_1.Validators.maxLength(3)]],
            type: ['', [custom_validator_1.CustomValidator.isAType]],
            image: ['', [custom_validator_1.CustomValidator.underscoreCheck]],
            rarity: [''],
            height: [''],
            weight: [''],
        });
    }
    PokemonCreateComponent.prototype.ngOnInit = function () {
        // the long way
        // this.pf = new FormGroup({
        //     name: new FormControl('', [<any>Validators.required, <any>Validators.minLength(5)])
        // });
        // the short way
        // this.pf = this._fb.group({
        //     name: ['', [<any>Validators.required, <any>Validators.minLength(5)]],
        //     code: ['', [<any>Validators.required, <any>Validators.minLength(5)]]
        // });
    };
    PokemonCreateComponent.prototype.save = function () {
        var _this = this;
        this._pokemonService.savePokemon(this.pf.value)
            .subscribe(function (pokemon) { return _this.pokemon = pokemon; }, function (error) { return _this.errorMessage = error; });
    };
    PokemonCreateComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/pokemon-create/pokemon-create.component.html',
            styleUrls: ['app/pokemon-create/pokemon-create.component.css'],
            pipes: [pokemon_ucfirst_pipe_1.PokemonUcfirstPipe],
            directives: [forms_1.REACTIVE_FORM_DIRECTIVES],
        }), 
        __metadata('design:paramtypes', [pokemon_service_1.PokemonService, forms_1.FormBuilder])
    ], PokemonCreateComponent);
    return PokemonCreateComponent;
}());
exports.PokemonCreateComponent = PokemonCreateComponent;
//# sourceMappingURL=pokemon-create.component.js.map