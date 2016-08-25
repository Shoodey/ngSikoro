import {Component, OnInit} from '@angular/core';
import {Validators} from '@angular/common';
import {REACTIVE_FORM_DIRECTIVES, FormGroup, FormControl, FormBuilder} from '@angular/forms';


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
    types:string[] = ["plante", "eau", "feu", "electrique"];
    pokemon:IPokemon;
    errorMessage:string;

    pf:FormGroup;
    submitted:boolean;


    constructor(private _pokemonService:PokemonService, private _fb:FormBuilder) {
    }

    ngOnInit() {

        // the long way
        // this.pf = new FormGroup({
        //     name: new FormControl('', [<any>Validators.required, <any>Validators.minLength(5)])
        // });

        // the short way
        this.pf = this._fb.group({
            name: ['', [<any>Validators.required, <any>Validators.minLength(5)]]
        });

    }

    save(pokemon:IPokemon, isValid:boolean):void {
        this.submitted = true; // set form submit to true

        // check if model is valid
        // if valid, call API to save customer
        console.log(pokemon, isValid);
    }


}