import { Component, OnInit } from '@angular/core';
import { SessionService } from '../session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-scan-pos',
  templateUrl: './scan-pos.component.html',
  styleUrls: ['./scan-pos.component.scss']
})
export class ScanPosComponent implements OnInit {

  constructor(private sessionService: SessionService, private router: Router) { }

  title = 'honeyMoney';

  navigate(){
    this.sessionService.fetchPos().subscribe(() => {this.router.navigate(['scan_user'])})
  }
  
  ngOnInit() {
  }

}
