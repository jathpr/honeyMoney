import { Component, OnInit } from '@angular/core';
import { SessionService } from '../session.service';
import { PricesService } from '../prices.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-set-price',
  templateUrl: './set-price.component.html',
  styleUrls: ['./set-price.component.scss']
})
export class SetPriceComponent implements OnInit {

  constructor(private sessionService: SessionService) { }

  prices$: Observable<number[]>;
  getUser$: Observable<number>;
  totalPrice: number = 0;

  ngOnInit() {
    this.prices$ = this.sessionService.getPrices()
    this.getUser$ = this.sessionService.getUser()
  }

  add(price: number) {
    this.totalPrice += price;
  }

  clear() {
    this.totalPrice = 0;
  }

  pay() {
    if (this.totalPrice > 0)
      this.sessionService.pay(this.totalPrice);
  }

}
