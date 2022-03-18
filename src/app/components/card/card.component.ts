import { Component, Input } from '@angular/core';
import { CustomPokemon } from 'src/app/interfaces/pokemon';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input()
  pokemon!: CustomPokemon;

  constructor() { }


}
