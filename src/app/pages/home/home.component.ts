import { Component } from '@angular/core';
import { CustomPokemon } from 'src/app/interfaces/pokemon';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  arrRandom: CustomPokemon[] = [];
  sendOption: string = '';
  constructor() {}

  receiveData(event: CustomPokemon[] | string) {
    if (typeof event === 'string') this.sendOption = event;
    else this.arrRandom = event;
  }
}
