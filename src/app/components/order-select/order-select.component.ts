import {
  Component,
  EventEmitter,
  NgModule,
  OnInit,
  Output,
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgSelectConfig } from '@ng-select/ng-select';

@Component({
  selector: 'app-order-select',
  templateUrl: './order-select.component.html',
  styleUrls: ['./order-select.component.scss'],
})
export class OrderSelectComponent implements OnInit {
  @Output() sendOption = new EventEmitter();
  ngOnInit(){this.sendOrderBy()}

  selectedValue: string | undefined = undefined;

  options = [
    { name: 'Lowest Number (First)', value: 'Lowest id' },
    { name: 'Highest Number (First)', value: 'Highest id' },
    { name: 'A-Z', value: 'A-Z' },
    { name: 'Z-A', value: 'Z-A' },
  ];

  constructor(/* private config: NgSelectConfig */) {
    /* this.config.notFoundText = 'Custom Not Found';
    this.config.appendTo = 'body';
    this.config.bindValue = 'value'; */
  }

  sendOrderBy(): void {
    this.sendOption.emit(this.selectedValue)
  }
}
