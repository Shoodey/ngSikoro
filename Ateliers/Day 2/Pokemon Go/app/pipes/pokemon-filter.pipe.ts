import {PipeTransform, Pipe} from '@angular/core';
import {IPokemon} from "../shared/pokemon";

@Pipe({
    name: 'pokemonFilterPipe'
})

export class PokemonFilterPipe implements PipeTransform {

    transform(value:IPokemon[], args:string[]):any {
        let filter:string = args ? args.toLocaleString().toLowerCase() : null;
        //noinspection TypeScriptUnresolvedFunction
        return filter ?
            value.filter(
                (pokemon:IPokemon) =>
                    pokemon.name.toLocaleString().toLowerCase().match(filter)
            )
            : value
    }

}