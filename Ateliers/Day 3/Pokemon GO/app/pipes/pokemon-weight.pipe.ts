import {PipeTransform, Pipe} from '@angular/core';

@Pipe({
    name: 'pokemonWeightPipe'
})

export class PokemonWeightPipe implements PipeTransform{

    transform(value:any):any {
        return value + " kg";
}

}