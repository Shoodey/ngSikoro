import {PipeTransform, Pipe} from '@angular/core';

@Pipe({
    name: 'pokemonUcFirst'
})

export class PokemonUcfirstPipe implements PipeTransform{

    transform(value:any):any {
        return value.charAt(0).toUpperCase() + value.slice(1);
    }

}