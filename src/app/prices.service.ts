import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { delay, tap } from 'rxjs/operators';
import { SessionService } from './session.service';

@Injectable({
  providedIn: 'root'
})
export class PricesService {
  constructor(private sessionService: SessionService) {}

  private currentPrice
  private PRICE_LIST = [100,300,500,5000]
  pay$: Observable<number>;

  getPrices(): number[] {
    let priceList = this.sessionService.getPriceList()
    if (priceList)
      return priceList
    return this.PRICE_LIST
  }

  pay(price: number): void {
    this.currentPrice = price
  }

  getPrice(): number {
    return this.currentPrice;
  }

  chkCash(cash: number): boolean {
    return this.currentPrice <= cash
  }
}
