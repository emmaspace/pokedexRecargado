import {
  Component,
  EventEmitter,
  NgModule,
  OnInit,
  Output,
} from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { NgSelectConfig } from '@ng-select/ng-select';

const THUMBUP_ICON =
  `
  <svg style="width:20px;height:24px" viewBox="0 0 24 24">
    <path fill="currentColor" d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4C7.92,4 4.55,7.05 4.06,11H8.13C8.57,9.27 10.14,8 12,8C13.86,8 15.43,9.27 15.87,11H19.94C19.45,7.05 16.08,4 12,4M12,20C16.08,20 19.45,16.95 19.94,13H15.87C15.43,14.73 13.86,16 12,16C10.14,16 8.57,14.73 8.13,13H4.06C4.55,16.95 7.92,20 12,20M12,10A2,2 0 0,0 10,12A2,2 0 0,0 12,14A2,2 0 0,0 14,12A2,2 0 0,0 12,10Z" />
</svg>
  `

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

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer/* private config: NgSelectConfig */) {
    /* this.config.notFoundText = 'Custom Not Found';
    this.config.appendTo = 'body';
    this.config.bindValue = 'value'; */
    iconRegistry.addSvgIconLiteral('thumbs-up', sanitizer.bypassSecurityTrustHtml(THUMBUP_ICON));
  }

  sendOrderBy(): void {
    this.sendOption.emit(this.selectedValue)
  }
}
