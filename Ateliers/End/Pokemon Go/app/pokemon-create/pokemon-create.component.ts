import {Component, OnInit} from '@angular/core';
import {Validators} from '@angular/common';
import {REACTIVE_FORM_DIRECTIVES, FormGroup, FormControl, FormBuilder} from '@angular/forms';
import {CustomValidator} from '../validators/custom.validator';


import {PokemonUcfirstPipe} from "../pipes/pokemon-ucfirst.pipe";
import {IPokemon} from "../shared/pokemon";
import {PokemonService} from "../shared/pokemon.service";

@Component({
    templateUrl: 'app/pokemon-create/pokemon-create.component.html',
    styleUrls: ['app/pokemon-create/pokemon-create.component.css'],
    pipes: [PokemonUcfirstPipe],
    directives: [REACTIVE_FORM_DIRECTIVES],
})
export class PokemonCreateComponent implements OnInit {

    title:string = "Nouveau pokémon";
    types:string[] = ["plante", "eau", "feu", "electrique", "test"];
    pokemon:IPokemon;
    errorMessage:string;

    pf:FormGroup;
    submitted:boolean;


    constructor(private _pokemonService:PokemonService, private _fb:FormBuilder) {
        this.pf = _fb.group({
            name: ['', [Validators.required, Validators.minLength(5)]],
            code: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(3)]],
            type: ['', [CustomValidator.isAType]],
            image: ['', [CustomValidator.underscoreCheck]],
            rarity: [''],
            height: [''],
            weight: [''],
        });
    }

    ngOnInit() {

        // the long way
        // this.pf = new FormGroup({
        //     name: new FormControl('', [<any>Validators.required, <any>Validators.minLength(5)])
        // });

        // the short way
        // this.pf = this._fb.group({
        //     name: ['', [<any>Validators.required, <any>Validators.minLength(5)]],
        //     code: ['', [<any>Validators.required, <any>Validators.minLength(5)]]
        // });

    }

    save():void {
        this._pokemonService.savePokemon(this.pf.value)
            .subscribe(
                pokemon => this.pokemon = pokemon,
                error => this.errorMessage = <any>error
            );
    }


}