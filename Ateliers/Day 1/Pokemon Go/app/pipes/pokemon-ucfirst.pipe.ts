import {PipeTransform, Pipe} from '@angular/core';

@Pipe({
    name: 'pokemonUcfirst'
})
export class PokemonUcfirstPipe implements PipeTransform {

    transform(value: string): string {
           return this.ucfirst(value);
    }

    ucfirst(value: string): string{
        return value.charAt(0).toUpperCase() + value.slice(1);
    }

}