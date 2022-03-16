import { Component, Input, OnInit } from '@angular/core';
import { CustomPokemon } from 'src/app/interfaces/pokemon';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {
  @Input() arrRandom!: CustomPokemon[]
  
  constructor(public getPokemon:ApiService) { }

    ngOnInit(){
    this.arrRandom = this.getPokemon.pokeapi(false)
  }

 
}
