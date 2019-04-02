import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScanPosComponent } from './scan-pos/scan-pos.component';
import { ScanUserComponent } from './scan-user/scan-user.component';
import { SetPriceComponent } from './set-price/set-price.component';

import { FormsModule } from '@angular/forms';
import { ScanCustomerComponent } from './scan-customer/scan-customer.component';
import { PaymentComponent } from './payment/payment.component';

import { HttpClientModule }    from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { ServerService }  from './server.service';

@NgModule({
  declarations: [
    AppComponent,
    ScanPosComponent,
    ScanUserComponent,
    SetPriceComponent,
    ScanCustomerComponent,
    PaymentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    HttpClientInMemoryWebApiModule.forRoot(
      ServerService, { dataEncapsulation: false })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
