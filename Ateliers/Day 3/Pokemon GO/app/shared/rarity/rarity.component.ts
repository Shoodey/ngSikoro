import {Component, Input, OnChanges, Output} from '@angular/core';
import {EventEmitter} from "@angular/forms/src/facade/async";

@Component({
    selector: "pokemon-rarity",
    templateUrl: 'app/shared/rarity/rarity.component.html',
    styleUrls: ['app/shared/rarity/rarity.component.css']
})
export class PokemonRarityComponent implements OnChanges{
    @Input() rarity: number;
    rarityWidth:number;

    @Output() rarityClickedEvent: EventEmitter<number> = new EventEmitter<number>();

    ngOnChanges():void {
        this.rarityWidth = this.rarity * 80 / 5;
    }

    onClick(): void{
        this.rarityClickedEvent.emit(this.rarity);
    }
}