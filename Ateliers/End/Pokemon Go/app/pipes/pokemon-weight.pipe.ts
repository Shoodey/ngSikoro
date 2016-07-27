import {PipeTransform, Pipe} from '@angular/core';

@Pipe({
    name: 'pokemonWeight'
})
export class PokemonWeightPipe implements PipeTransform{
    transform(value:string, args:string[]):any {
        return value + ' kg';
    }

}