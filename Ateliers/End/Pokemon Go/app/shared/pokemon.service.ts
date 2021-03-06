import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {IPokemon} from "./pokemon";

@Injectable()
export class PokemonService {

    private _url = "http://localhost/Pokemon/public/api/pokemons";

    constructor(private _http:Http) {
    }

    getPokemon(id: number):Observable<IPokemon> {
        return this._http.get(this._url + "/" + id)
            .map(PokemonService.extractData)
            .do(data => console.log("Loaded pokemon."))
            .catch(PokemonService.handleError);
    }

    getPokemons():Observable<IPokemon[]> {
        return this._http.get(this._url)
            .map(PokemonService.extractData)
            .do(data => console.log("Loaded " + data.length + " pokemons."))
            .catch(PokemonService.handleError);
    }

    savePokemon(pokemon: IPokemon):Observable<IPokemon> {
        return this._http.post(this._url + "/create", pokemon)
            .map(PokemonService.extractData)
            .do(data => console.log("Saved new pokemon."))
            .catch(PokemonService.handleError);
    }

    editPokemon(id: number, pokemon: IPokemon):Observable<IPokemon> {
        return this._http.post(this._url + "/edit/" + id, pokemon)
            .map(PokemonService.extractData)
            .do(data => console.log("Edited the pokemon " + pokemon.name + "."))
            .catch(PokemonService.handleError);
    }

    private static extractData(response:Response) {
        let body = response.json();
        return body || {};
    }

    private static handleError(error:any) {
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }
}