import { Component } from '@angular/core';
import { CustomPokemon } from 'src/app/interfaces/pokemon';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  arrRandom: CustomPokemon[] = []
  constructor() { }


  receiveData(event: CustomPokemon[]) {

    this.arrRandom = event

  }
}
