import {Component, OnInit} from '@angular/core';
import {PokemonService} from "../shared/pokemon.service";
import {IPokemon} from "../shared/pokemon";
import {ActivatedRoute} from "@angular/router";
import {NgForm} from "@angular/forms";

@Component({
    templateUrl: 'app/pokemon-edit/pokemon-edit.component.html',
    styleUrls: ['app/pokemon-edit/pokemon-edit.component.css'],
})
export class PokemonEditComponent implements OnInit {

    pokemon:IPokemon;
    types:string[] = ["plante", "eau", "feu", "electrique"];


    id:number;

    constructor(private _pokemonService:PokemonService, private _route:ActivatedRoute) {

    }

    ngOnInit():void {
        this._route.params
            .map(params => params['id'])
            .subscribe(
                (id) => {
                    this._pokemonService.getPokemon(id)
                        .subscribe(
                            data => this.pokemon = data,
                            error => console.log(error)
                        )
                });
    }


    edit (id, form: NgForm): void{
        this._pokemonService.editPokemon(id, form.value)
            .subscribe(
                data => this.pokemon = data,
                error => console.log(error)
            )
    }
}