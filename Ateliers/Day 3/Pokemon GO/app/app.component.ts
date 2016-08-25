import {Component} from '@angular/core';
import 'rxjs/RX';
import {PokemonListComponent} from "./pokemon-list/pokemon-list.component";
import {ROUTER_DIRECTIVES, ActivatedRoute} from "@angular/router";
import {PokemonService} from "./shared/pokemon.service";
import {HTTP_PROVIDERS} from "@angular/http";
import {HomeComponent} from "./hom/home.component";
import {NotFoundComponent} from "./404/notfound.component";

@Component({
    selector: 'app',
    templateUrl: "app/app.component.html",
    styleUrls: ["app/app.component.css"],
    directives: [PokemonListComponent, ROUTER_DIRECTIVES],
    providers: [HTTP_PROVIDERS, PokemonService],
    precompile: [HomeComponent, PokemonListComponent, NotFoundComponent]
})
export class AppComponent {
    title: string = "Pokemon Go";
}