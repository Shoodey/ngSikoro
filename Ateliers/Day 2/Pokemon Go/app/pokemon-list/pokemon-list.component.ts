import {Component} from '@angular/core';
import {IPokemon} from "../shared/pokemon";

import {NgSwitch, NgSwitchCase, NgSwitchDefault} from '@angular/common';

import {PokemonUcfirstPipe} from "../pipes/pokemon-ucfirst.pipe";
import {PokemonWeightPipe} from "../pipes/pokemon-weight.pipe";
import {PokemonHeightPipe} from "../pipes/pokemon-height.pipe";
import {PokemonFilterPipe} from "../pipes/pokemon-filter.pipe";
import {PokemonRarityComponent} from "../shared/rarity/rarity.component";

@Component({
    selector: 'pokemon-list',
    templateUrl: "app/pokemon-list/pokemon-list.component.html",
    styleUrls: ["app/pokemon-list/pokemon-list.component.css"],
    pipes: [PokemonUcfirstPipe, PokemonWeightPipe, PokemonHeightPipe, PokemonFilterPipe],
    directives: [NgSwitch, NgSwitchCase, NgSwitchDefault, PokemonRarityComponent]
})
export class PokemonListComponent{
    title: string = "Liste des Pokémons"

    pokemons: IPokemon[] = [
        {
            "name" : "pikachu",
            "code" : "025",
            "type" : "electrique",
            "weight" : 6,
            "height" : 0.41,
            "rarity" : 3.5,
            "image" : "assets/img/pikachu.png"
        },
        {
            "name" : "carapuce",
            "code" : "025",
            "type" : "eau",
            "weight" : 5.4,
            "height" : 0.41,
            "rarity" : 2,
            "image" : "assets/img/squirtle.png"
        },
        {
            "name" : "salamèche",
            "code" : "025",
            "type" : "feu",
            "weight" : 3.2,
            "height" : 0.41,
            "rarity" : 4.5,
            "image" : "assets/img/charmander.png"
        },
    ];

    imageState: boolean = false;

    toggleImage(): void{
        this.imageState = !this.imageState;
    }

    onRarityClicked(rarity: number): void{
        console.log(rarity)
    }
}