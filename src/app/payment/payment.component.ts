import { Component, OnInit } from '@angular/core';
import { SessionService } from '../session.service';
import { PricesService } from '../prices.service';

import { Customer } from "../customer";

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  constructor(private sessionService: SessionService, private pricesService: PricesService) { }

  customer: Customer
  isPaid: boolean = false

  ngOnInit() {
    this.sessionService.fetchCustomer().subscribe(hi => {this.customer = hi, console.log(hi)})
  }


  pay() {
    this.sessionService.pay(this.pricesService.getPrice()).subscribe(() => { this.isPaid = true })
  }
}
