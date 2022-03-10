import { Component, OnInit } from '@angular/core';
import { pokemon } from 'src/app/classes/pokemon';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  arrRandom:Array<pokemon> = []
  constructor() { }

  ngOnInit(): void {
  }

  receiveData(event:any){
    this.arrRandom=event
    //console.log(event)
  }
}
