import {Component} from '@angular/core';
import {HTTP_PROVIDERS} from '@angular/http';
import 'rxjs/RX';
import { ROUTER_DIRECTIVES } from '@angular/router';

import {PokemonService} from "./shared/pokemon.service";
import {PokemonListComponent} from "./pokemon-list/pokemon-list.component";
import {HomeComponent} from "./home/home.component";
import {PokemonCreateComponent} from "./pokemon-create/pokemon-create.component";
import {PageNotFoundComponent} from "./404/404.component";
import {PokemonEditComponent} from "./pokemon-edit/pokemon-edit.component";

@Component({
    selector: 'app',
    templateUrl: 'app/app.component.html',
    styleUrls: ['app/app.component.css'],
    directives: [PokemonListComponent, ROUTER_DIRECTIVES],
    providers: [PokemonService, HTTP_PROVIDERS],
    precompile: [HomeComponent, PokemonListComponent, PokemonCreateComponent, PokemonEditComponent, PageNotFoundComponent]
})
export class AppComponent {

}
