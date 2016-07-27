import {PipeTransform, Pipe} from '@angular/core';

@Pipe({
    name: 'pokemonHeight'
})
export class PokemonHeightPipe implements PipeTransform{
    transform(value:string):any {
        return value + ' m';
    }

}