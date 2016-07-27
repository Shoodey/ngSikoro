import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {IPokemon} from "./pokemon";

@Injectable()
export class PokemonService {

    private _url = "http://localhost/Pokemon/public/api/pokemons";

    constructor(private _http:Http) {
    }


    getPokemons():Observable<IPokemon[]> {
        return this._http.get(this._url)
            .map(this.extractData)
            .do(data => console.log("Loaded " + data.length + " pokemons."))
            .catch(this.handleError);
    }

    savePokemon(pokemon: IPokemon):Observable<IPokemon> {
        pokemon.image = "assets/img/" + pokemon.image + ".png";
        return this._http.post(this._url + "/create", pokemon)
            .map(this.extractData)
            .do(data => console.log("Saved new pokemon"))
            .catch(this.handleError);
    }

    private extractData(response:Response) {
        let body = response.json();
        return body || {};
    }

    private handleError(error:any) {
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }
}