import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { pokemon } from 'src/app/classes/pokemon';
import { ApiService } from 'src/app/services/api.service';


@Component({
  selector: 'app-random-button',
  templateUrl: './random-button.component.html',
  styleUrls: ['./random-button.component.scss']
})
export class RandomButtonComponent implements OnInit {
  @Output() arrRandom = new EventEmitter() 
  
  constructor(public getPokemon:ApiService) { }

  ngOnInit(): void {
  }
  getRandom(){
    this.arrRandom.emit(this.getPokemon.pokeapi(true))
  }
}
