import { Component, OnInit } from '@angular/core';
import { SessionService } from '../session.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-scan-user',
  templateUrl: './scan-user.component.html',
  styleUrls: ['./scan-user.component.scss']
})
export class ScanUserComponent implements OnInit {

  constructor(private sessionService: SessionService) {}

  pos$: Observable<number>;

  ngOnInit() {
    this.pos$ = this.sessionService.fetchPos()
  }

}
