import {Component} from '@angular/core';

@Component({
    selector: 'pokemon-list',
    templateUrl: "app/pokemon-list/pokemon-list.component.html",
    styleUrls: ["app/pokemon-list/pokemon-list.component.css"]
})
export class PokemonListComponent{
    title: string = "Liste des Pokémons";

    pokemons: any = [
        {
            "name" : "Pikachu",
            "code" : "025",
            "type" : "electrique",
            "weight" : 6,
            "height" : 0.41,
            "rarity" : 4.5,
            "image" : "assets/img/pikachu.png"
        },
        {
            "name" : "Carapuce",
            "code" : "025",
            "type" : "electrique",
            "weight" : 6,
            "height" : 0.41,
            "rarity" : 4.5,
            "image" : "assets/img/pikachu.png"
        },
        {
            "name" : "Bulbasaur",
            "code" : "025",
            "type" : "electrique",
            "weight" : 6,
            "height" : 0.41,
            "rarity" : 4.5,
            "image" : "assets/img/pikachu.png"
        },
    ];

    imageState: boolean = false;

    toggleImage(): void{
        this.imageState = !this.imageState;
    }
}