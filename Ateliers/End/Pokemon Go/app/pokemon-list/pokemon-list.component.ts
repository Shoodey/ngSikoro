import {Component, OnInit} from '@angular/core';
import {NgSwitch, NgSwitchCase, NgSwitchDefault} from '@angular/common';
import { ROUTER_DIRECTIVES } from '@angular/router';

import {IPokemon} from './../shared/pokemon';
import {PokemonService} from "../shared/pokemon.service";

import {PokemonRarityComponent} from "./../shared/rarity/rarity.component";

import {PokemonFilterPipe} from "../pipes/pokemon-filter.pipe";
import {PokemonWeightPipe} from "../pipes/pokemon-weight.pipe";
import {PokemonHeightPipe} from "../pipes/pokemon-height.pipe";
import {PokemonUcfirstPipe} from "../pipes/pokemon-ucfirst.pipe";

@Component({
    selector: 'pokemon-list',
    templateUrl: 'app/pokemon-list/pokemon-list.component.html',
    styleUrls: ['app/pokemon-list/pokemon-list.component.css'],
    pipes: [PokemonFilterPipe, PokemonWeightPipe, PokemonHeightPipe, PokemonUcfirstPipe],
    directives: [NgSwitch, NgSwitchCase, NgSwitchDefault, PokemonRarityComponent, ROUTER_DIRECTIVES],

})
export class PokemonListComponent implements OnInit {

    title:string = "Liste des pokémons";
    showImage:boolean = true;
    errorMessage:string;

    pokemons:IPokemon[];

    constructor(private _pokemonService:PokemonService) {
    }

    ngOnInit():void {
        this._pokemonService.getPokemons()
            .subscribe(
                pokemons => this.pokemons = pokemons,
                error => this.errorMessage = <any>error
            );
    }


    toggleImage():void {
        this.showImage = !this.showImage;
    }

    onRarityClicked(message:string):void {
        alert(message);
    }
}