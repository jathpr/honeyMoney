import { Component, OnInit } from '@angular/core';
import { SessionService } from '../session.service';

@Component({
  selector: 'app-scan-pos',
  templateUrl: './scan-pos.component.html',
  styleUrls: ['./scan-pos.component.scss']
})
export class ScanPosComponent implements OnInit {

  constructor(private sessionService: SessionService) { }

  title = 'honeyMoney';
  
  ngOnInit() {
  }

}
