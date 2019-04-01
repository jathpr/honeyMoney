import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScanPosComponent } from './scan-pos/scan-pos.component';
import { ScanUserComponent } from './scan-user/scan-user.component';
import { SetPriceComponent } from './set-price/set-price.component';

import { FormsModule } from '@angular/forms';
import { ScanCustomerComponent } from './scan-customer/scan-customer.component';

@NgModule({
  declarations: [
    AppComponent,
    ScanPosComponent,
    ScanUserComponent,
    SetPriceComponent,
    ScanCustomerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
