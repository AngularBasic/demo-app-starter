import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-customer-details',
   styleUrls: ['./customer-details.component.scss'],
  template: `<p>
    {{customer.details}}
  </p>`
})
export class CustomerDetailsComponent implements OnInit {

  @Input() customer: any;

  constructor() { }

  ngOnInit() {
  }

}
