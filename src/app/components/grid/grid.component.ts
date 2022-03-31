import { Component, Input, OnInit } from '@angular/core';
import { CustomPokemon } from 'src/app/interfaces/pokemon';
import { ApiService } from 'src/app/services/api.service';
import { sortBy } from 'sort-by-typescript';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
})
export class GridComponent implements OnInit {
  @Input() arrRandom!: CustomPokemon[];
  @Input() sendOption!: string;

  orderedArr= (arr = this.arrRandom):CustomPokemon[]=>{
    switch (this.sendOption) {
      case 'Lowest id':
        this.arrRandom = this.arrRandom.sort(sortBy('id'))
        break;
      case 'Highest id':
        this.arrRandom = this.arrRandom.sort(sortBy('id')).reverse()
        break;
      case 'A-Z':
        this.arrRandom = this.arrRandom.sort(sortBy('name'))
        break;
      case 'Z-A':
        this.arrRandom = this.arrRandom.sort(sortBy('name')).reverse()
        break;
      default: this.arrRandom = this.arrRandom
        break;
    }
    return this.arrRandom
  }

  constructor(public getPokemon: ApiService) {}

  ngOnInit() {
    this.arrRandom = this.getPokemon.pokeapi(false);
    console.log(this.sendOption)
  }

}
