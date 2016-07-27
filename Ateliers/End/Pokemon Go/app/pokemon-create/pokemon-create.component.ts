import {Component} from '@angular/core';
import {PokemonUcfirstPipe} from "../pipes/pokemon-ucfirst.pipe";
import {IPokemon} from "../shared/pokemon";
import {PokemonService} from "../shared/pokemon.service";

@Component({
    templateUrl: 'app/pokemon-create/pokemon-create.component.html',
    styleUrls: ['app/pokemon-create/pokemon-create.component.css'],
    pipes: [PokemonUcfirstPipe]
})
export class PokemonCreateComponent{

    title:string = "Nouveau pokémon";
    types:string[] = ["plante", "eau", "feu", "electrique"];
    pokemon:IPokemon;
    errorMessage:string;

    constructor(private _pokemonService:PokemonService){ }

    save(e, valid, value) {
        e.preventDefault();

        this._pokemonService.savePokemon(value)
            .subscribe(
                pokemon => this.pokemon = pokemon,
                error => this.errorMessage = <any>error
            );
    }


}