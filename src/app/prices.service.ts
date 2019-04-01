import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { delay, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PricesService {

  constructor() { }

  getPrices(pos: number, user: number): Observable<number[]> {
    console.log(pos)
    console.log(user)
    if (pos === 8 && user === 17)
    return of([100,300,500,1000]).pipe(
      delay(9)
    );
    return of([100,300,500,5000])
  }

  // pay(): Observable<number> {
  //   return of([100,300,500,5000])
  // }
}
