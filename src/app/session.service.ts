import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { delay, tap } from 'rxjs/operators';

import { User } from "./user";
import { Customer } from "./customer";

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  private user: User
  private customer: Customer

  constructor() { this.user = new User()}

  fetchPos(): Observable<number> {
    return of(8).pipe(
      delay(900),
      tap(id => {this.user.posId = id})
    );
  }

  fetchUser(): Observable<number> {
    return of(17).pipe(
      delay(9),
      tap(id => {this.user.userId = id})
    );
  }

  fetchCustomer(): Observable<Customer> {
    this.customer = {id:33, name: "Jon Bol", cash: 3500}
    return of(this.customer).pipe(
      delay(9)
    );
  }

  getUser(): User {
    console.log(this.user.userId )
    console.log(this.user.posId )
    if (this.user.userId && this.user.posId)
      return this.user
    return null
  }

  pay(cash: number):  Observable<number> {
    this.customer.cash -= cash; // but on server
    return of(this.customer.cash).pipe(
      delay(400)
    )
  }

}
