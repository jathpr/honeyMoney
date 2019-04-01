import { Component, OnInit } from '@angular/core';
import { SessionService } from '../session.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-scan-customer',
  templateUrl: './scan-customer.component.html',
  styleUrls: ['./scan-customer.component.scss']
})
export class ScanCustomerComponent implements OnInit {

  constructor(private sessionService: SessionService) { }

  ngOnInit() {
  }

}
