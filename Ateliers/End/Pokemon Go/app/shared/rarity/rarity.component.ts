import {Component, OnChanges, Input, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'pokemon-rarity',
    templateUrl: 'app/shared/rarity/rarity.component.html',
    styleUrls: ['app/shared/rarity/rarity.component.css']
})
export class PokemonRarityComponent implements OnChanges{

    @Input() rarity: number;
    rarityWidth: number;
    @Output() rarityClickEvent: EventEmitter<string> = new EventEmitter<string>();

    ngOnChanges():void {
        this.rarityWidth = this.rarity * 80 / 5;
    }

    onClick(): void {
        this.rarityClickEvent.emit(`Rareté du pokemon est de: ${this.rarity}`);
    }
}