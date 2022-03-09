import { Component, OnInit } from '@angular/core';
import { pokemon } from 'src/app/classes/pokemon';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {
  arrPokemones:Array<pokemon> = []
  constructor(public getPokemon:ApiService) { }

  ngOnInit(){
    this.arrPokemones = this.getPokemon.pokeapi()
  }
}
