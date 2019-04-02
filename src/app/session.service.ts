import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { delay, tap } from 'rxjs/operators';

import { Employee } from "./employee";
import { Customer } from "./customer";
import { Pos } from './pos';

import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  private employee = new Employee()
  private customer = new Customer()
  private pos = new Pos()
  private employeesUrl = 'api/employees';
  private customerUrl = 'api/customers/6';
  private possUrl = 'api/poss';

  constructor( private http: HttpClient ) {}

  fetchPos(): Observable<Pos> {
    return this.http.get<Pos>(this.possUrl).pipe(
      tap(poss => {this.pos = poss[0]})
    );
  }

  fetchUser(): Observable<Employee> {
    return this.http.get<Employee>(this.employeesUrl).pipe(
      tap(employees => {this.employee = employees[0]})
    );
  }

  fetchCustomer(): Observable<Customer> {
    return this.http.get<Customer>(this.customerUrl).pipe(
      tap(customer => {this.customer = customer})
    );
  }

  getPriceList(): [number] {
    console.log(this.pos )
    console.log(this.employee )
    if (this.pos && this.pos.priceList && this.pos.priceList.length)
      return this.pos.priceList
    return null
  }

  pay(cash: number):  Observable<number> {
    this.customer.credits -= cash; // but on server
    return of(this.customer.credits).pipe(
      delay(400)
    )
  }

}
