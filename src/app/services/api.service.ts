import axios from 'axios';
import { Injectable } from '@angular/core';
import { sortBy } from 'sort-by-typescript';
import { CustomPokemon, Pokemon, Type } from '../interfaces/pokemon';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() { }
  pokeapi(random:boolean) {
    let randomArr: number[] = []
    let pokeArr: CustomPokemon[]= []
    let num: number
    if (random === true){
      for (let i=0; i<20;i++){
        num = Math.floor(Math.random()*877) + 1
        randomArr.push(num)
      }
    } else {
      randomArr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
    }
    for (const num of randomArr) {
      axios.get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${num}`)
        .then(pokemon => {
          const {data} = pokemon
          pokeArr.sort(sortBy('id'))
          pokeArr.push({
            "name": data.name,
            "id": data.id,
            "types": data.types.map((elem :Type) => elem.type.name),
            "image": data.sprites.other?.['official-artwork'].front_default ? data.sprites.other?.['official-artwork'].front_default : "https://i.dlpng.com/static/png/5378263-casino-game-party-pokeball-video-game-icon-pokeball-outline-512_512_preview.png"
          })
        })
        .catch((error) => console.error(error));
    }
    return pokeArr
  }
}
