import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {NgForm} from '@angular/forms';

import {PokemonUcfirstPipe} from "../pipes/pokemon-ucfirst.pipe";
import {IPokemon} from "../shared/pokemon";
import {PokemonService} from "../shared/pokemon.service";

@Component({
    templateUrl: 'app/pokemon-edit/pokemon-edit.component.html',
    styleUrls: ['app/pokemon-edit/pokemon-edit.component.css'],
    pipes: [PokemonUcfirstPipe]
})
export class PokemonEditComponent implements OnInit {
    title:string = "Editer un pokémon";
    types:string[] = ["plante", "eau", "feu", "electrique"];

    pokemon:IPokemon;
    errorMessage:string;

    id:number;

    constructor(private _pokemonService:PokemonService, private route:ActivatedRoute) {
    }

    ngOnInit():void {
        this.route.params
            .map(params => params['id'])
            .subscribe((id) => {
                this._pokemonService.getPokemon(id)
                    .subscribe(
                        pokemon => this.pokemon = pokemon,
                        error => this.errorMessage = <any>error
                    );
            });
    }

    edit(id:number, pokemonForm:NgForm):void {
        this._pokemonService.editPokemon(id, pokemonForm.value)
            .subscribe(
                pokemon => this.pokemon = pokemon,
                error => this.errorMessage = <any>error
            );
    }
}