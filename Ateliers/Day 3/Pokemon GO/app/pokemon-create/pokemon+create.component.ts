import {Component, OnInit} from '@angular/core';
import {PokemonService} from "../shared/pokemon.service";
import {IPokemon} from "../shared/pokemon";
import {FormGroup, FormBuilder, REACTIVE_FORM_DIRECTIVES} from "@angular/forms";
import {Validators} from "@angular/common";
import {CustomValidator} from "../shared/validators/custom.validator";

@Component({
    templateUrl: 'app/pokemon-create/pokemon-create.component.html',
    styleUrls: ['app/pokemon-create/pokemon-create.component.css'],
    directives: [REACTIVE_FORM_DIRECTIVES],
})
export class PokemonCreateComponent{
    title:string = "Nouveau pokémon";
    types:string[] = ["plante", "eau", "feu", "electrique", "test"];
    pokemon:IPokemon;

    pokemonForm: FormGroup;

    constructor(private _pokemonService: PokemonService, private _formBuilder : FormBuilder){
        this.pokemonForm = _formBuilder.group({
            name: ['', [Validators.required, CustomValidator.underscoreCheck, CustomValidator.isAType]],
            code: [''],
            type: [''],
            image: [''],
            weight: [''],
            height: [''],
            rarity: ['']
        });
    }
}