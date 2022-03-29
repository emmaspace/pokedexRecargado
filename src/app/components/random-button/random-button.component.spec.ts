import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { TestBed, ComponentFixture } from '@angular/core/testing';
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

  it('should return the arrRandom when using getPokemon()', async () => {
    let fixture: ComponentFixture<RandomButtonComponent>;

    TestBed.configureTestingModule({
      declarations: [RandomButtonComponent],
    });

    fixture = TestBed.createComponent(RandomButtonComponent);
    component = fixture.componentInstance;
    const spy = spyOn(component, 'getRandom');

    fixture.detectChanges();
    let buttonElement = fixture.debugElement.query(By.css('button'));

    buttonElement.triggerEventHandler('click', spy);
    fixture.detectChanges();

    expect(component?.getRandom).toHaveBeenCalledTimes(1);
  });
});
