import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScanPosComponent } from './scan-pos/scan-pos.component';
import { ScanUserComponent } from './scan-user/scan-user.component';
import { SetPriceComponent } from './set-price/set-price.component';
import { ScanCustomerComponent } from './scan-customer/scan-customer.component';
import { PaymentComponent } from './payment/payment.component';

const routes: Routes = [
  { path: '', redirectTo: '/scan_pos', pathMatch: 'full' },
  { path: 'scan_pos', component: ScanPosComponent },
  { path: 'set_price', component: SetPriceComponent },
  { path: 'scan_customer', component: ScanCustomerComponent },
  { path: 'payment', component: PaymentComponent },
  { path: 'scan_user', component: ScanUserComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
