import {PipeTransform, Pipe} from '@angular/core';
import {IPokemon} from './../shared/pokemon';

@Pipe({
    name: "pokemonFilter"
})
export class PokemonFilterPipe implements PipeTransform {

    transform(value:IPokemon[], args:string[]):IPokemon[] {

        let filter:string = args ? args.toLocaleString().toLocaleLowerCase() : null;
        return filter ?
            value.filter(
                (pokemon:IPokemon) : any => pokemon.name.toLocaleLowerCase().match(filter)
            ) : value;

    }

}
