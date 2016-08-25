import {Component} from '@angular/core';
import {PokemonListComponent} from "./pokemon-list/pokemon-list.component";

@Component({
    selector: 'app',
    templateUrl: "app/app.component.html",
    styleUrls: ["app/app.component.css"],
    directives: [PokemonListComponent]
})
export class AppComponent {
    title: string = "Pokemon Go";
}