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
  pay$: Observable<number>;

  getPrices(): Observable<number[]> {
    if (this.sessionService.getUser())
    return of([100,300,500,1000]).pipe(
      delay(9)
    );
    return of([100,300,500,5000])
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
