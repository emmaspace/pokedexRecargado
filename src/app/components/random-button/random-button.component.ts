import { ApiService } from 'src/app/services/api.service';
import { Component, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-random-button',
  templateUrl: './random-button.component.html',
  styleUrls: ['./random-button.component.scss']
})
export class RandomButtonComponent {
  @Output() arrRandom = new EventEmitter() 
  
  constructor(public getPokemon:ApiService) { }

  getRandom():void{
    this.arrRandom.emit(this.getPokemon.pokeapi(true))
  }
}
