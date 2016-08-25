import {Component, OnInit} from '@angular/core';
import {IPokemon} from "../shared/pokemon";


import {NgSwitch, NgSwitchCase, NgSwitchDefault} from '@angular/common';

import {PokemonUcfirstPipe} from "../pipes/pokemon-ucfirst.pipe";
import {PokemonWeightPipe} from "../pipes/pokemon-weight.pipe";
import {PokemonHeightPipe} from "../pipes/pokemon-height.pipe";
import {PokemonFilterPipe} from "../pipes/pokemon-filter.pipe";
import {PokemonRarityComponent} from "../shared/rarity/rarity.component";
import {PokemonService} from "../shared/pokemon.service";
import {ROUTER_DIRECTIVES} from "@angular/router";

@Component({
    selector: 'pokemon-list',
    templateUrl: "app/pokemon-list/pokemon-list.component.html",
    styleUrls: ["app/pokemon-list/pokemon-list.component.css"],
    pipes: [PokemonUcfirstPipe, PokemonWeightPipe, PokemonHeightPipe, PokemonFilterPipe],
    directives: [NgSwitch, NgSwitchCase, NgSwitchDefault, PokemonRarityComponent, ROUTER_DIRECTIVES]
})
export class PokemonListComponent implements OnInit{
    title: string = "Liste des Pokémons"

    pokemons: IPokemon[];

    imageState: boolean = false;

    constructor(private _pokemonService : PokemonService){};

    ngOnInit():any {
       // contacter le service
        this._pokemonService.getPokemons().subscribe(
            data => this.pokemons = data,
            error => console.log(error)
        )
    }

    toggleImage(): void{
        this.imageState = !this.imageState;
    }

    static onRarityClicked(rarity: number): void{
        console.log(rarity)
    }
}