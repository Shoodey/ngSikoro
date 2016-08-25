import {PipeTransform, Pipe} from '@angular/core';

@Pipe({
    name: 'pokemonHeightPipe'
})

export class PokemonHeightPipe implements PipeTransform{

    transform(value:any):any {
        return value + " m";
    }

}