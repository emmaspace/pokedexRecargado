import { Injectable } from '@angular/core';
import { PokemonClient } from 'pokenode-ts';
import axios from 'axios';
import { pokemon } from '../classes/pokemon';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  pokeArr : Array<pokemon> = []
  constructor() { }
  pokeapi() {
    for (let i = 1; i < 21; i++) {
      axios(`https://pokeapi.co/api/v2/pokemon/${i}`)
        .then((data) => {
          console.log(data.data.sprites.other.dream_world.front_default)
          this.pokeArr.push({
            "name": data.data.name,
            "id": data.data.id,
            "types": data.data.types.map((elem: any) => elem.type.name),
            "image": data.data.sprites.other.dream_world.front_default
          })
        })
        .catch((error) => console.error(error));
    }
    return this.pokeArr
  }
}
