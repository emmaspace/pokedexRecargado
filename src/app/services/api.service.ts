import axios from 'axios';
import { Injectable } from '@angular/core';
import { PokemonClient } from 'pokenode-ts';
import { sortBy } from 'sort-by-typescript';
import { pokemon } from '../classes/pokemon';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  //pokeArr : Array<pokemon> = []
  //pokeArr2 : Array<pokemon> = []
  constructor() { }
  pokeapi(random:boolean) {
    let randomArr=[] as any
    let pokeArr = [] as any
    let num
    if (random === true){
      for (let i=0; i<20;i++){
        num = Math.floor(Math.random()*877) + 1
        randomArr.push(num)
      }
    } else {
      randomArr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
    }
    for (const num of randomArr) {
      axios(`https://pokeapi.co/api/v2/pokemon/${num}`)
        .then((data) => {
          pokeArr.sort(sortBy('id'))
          pokeArr.push({
            "name": data.data.name,
            "id": data.data.id,
            "types": data.data.types.map((elem: any) => elem.type.name),
            "image": data.data.sprites.other['official-artwork'].front_default
          })
        })
        .catch((error) => console.error(error));
    }
    return pokeArr
  }
}
