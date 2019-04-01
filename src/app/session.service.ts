import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { delay, tap } from 'rxjs/operators';

import { PricesService } from './prices.service';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  private posIndex: number
  private userIndex: number
  private currentPrice
  pay$: Observable<number>;

  constructor(private pricesService: PricesService) { }

  getPos(): Observable<number> {
    return of(8).pipe(
      delay(900),
      tap(id => {this.posIndex = id})
    );
  }

  getUser(): Observable<number> {
    return of(17).pipe(
      delay(9),
      tap(id => {this.userIndex = id})
    );
  }

  getPrices(): Observable<number[]> {
    return this.pricesService.getPrices(this.posIndex, this.userIndex)
  }

  pay(price: number): void {
    this.currentPrice = price
  }

  getPrice(): number {
    return this.currentPrice;
  }

}
