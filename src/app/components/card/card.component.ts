import { Component, Input, OnInit } from '@angular/core';
import { pokemon } from 'src/app/classes/pokemon';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input()
  pokemon!: pokemon;
  
  constructor() { }

  ngOnInit(): void {
  }
}
