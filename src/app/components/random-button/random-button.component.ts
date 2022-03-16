import { Component, Output, EventEmitter } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-random-button',
  templateUrl: './random-button.component.html',
  styleUrls: ['./random-button.component.scss']
})
export class RandomButtonComponent {
  @Output() arrRandom = new EventEmitter() 
  
  constructor(public getPokemon:ApiService) { }

 
  getRandom(){
    this.arrRandom.emit(this.getPokemon.pokeapi(true))
  }
}
