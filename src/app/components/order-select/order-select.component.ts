import { Component, EventEmitter, NgModule, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-order-select',
  templateUrl: './order-select.component.html',
  styleUrls: ['./order-select.component.scss']
})


export class OrderSelectComponent{
  @Output() selectedOption = new EventEmitter()

  selectOption: HTMLElement | undefined
  order: FormGroup

  options = [
    { name: "Sort results by", value: "", state:"disabled" },
    { name: "Lowest Number (First)", value: "Lowest id", state:"enabled" },
    { name: "Highest Number (First)", value: "Highest id", state:"enabled" },
    { name: "A-Z", value: "A-Z", state:"enabled" },
    { name: "Z-A", value: "Z-A", state:"enabled" }
  ]
  
  
  constructor() {
    this.order = new FormGroup({option: new FormControl(null)})
   }

  sendOrderBy():void{
    console.log(this.selectedOption)
    this.selectedOption.emit(this.selectedOption)
  }
}
