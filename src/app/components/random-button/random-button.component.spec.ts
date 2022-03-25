import { DebugElement } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { CustomPokemon } from './../../interfaces/pokemon';
import { RandomButtonComponent } from './random-button.component';
class mockApiService {
  pokeapi(random: boolean): CustomPokemon[] {
    const arr1: CustomPokemon[] = [
      { name: 'Pikachu', id: 3, types: ['electric'] },
      { name: 'Bulbasaur', id: 6, types: ['plant'] },
      { name: 'Charmander', id: 8, types: ['fire'] },
    ];
    const arr2: CustomPokemon[] = [
      { name: 'Pikachu', id: 1, types: ['electric'] },
      { name: 'Bulbasaur', id: 2, types: ['plant'] },
      { name: 'Charmander', id: 3, types: ['fire'] },
    ];
    if (random) return arr1;
    else return arr2;
  }
}

describe('RandomButtonComponent', () => {
  let service: mockApiService | null;
  let component: RandomButtonComponent | null;

  beforeEach(() => {
    service = new mockApiService();
    component = new RandomButtonComponent(service);
    spyOn(component, 'getRandom')
  });
  afterEach(() => {
    service = null;
    component = null;
  });

  it('should render the surprise me button', () => {
    expect(component).toBeTruthy();
  });

  it('should bring an array of the first three pokemon if false', () => {
    expect(service?.pokeapi(false)).toEqual([
      { name: 'Pikachu', id: 1, types: ['electric'] },
      { name: 'Bulbasaur', id: 2, types: ['plant'] },
      { name: 'Charmander', id: 3, types: ['fire'] },
    ]);
  });

  it('should bring an array of random pokemon if true', () => {
    expect(service?.pokeapi(true)).toEqual([
      { name: 'Pikachu', id: 3, types: ['electric'] },
      { name: 'Bulbasaur', id: 6, types: ['plant'] },
      { name: 'Charmander', id: 8, types: ['fire'] },
    ]);
  });

  it('should return the arrRandom when using getPokemon()', () => {
    const fixture = TestBed.createComponent(RandomButtonComponent);
    fixture.detectChanges();

    const debug: DebugElement = fixture.debugElement;

    const buttonDe = debug.query(By.css('button'));
    const button: HTMLElement = buttonDe.nativeElement;
    console.log(button);
    button.click();
    expect(component?.getRandom()).toHaveBeenCalled();
  });
});
