import { Component, OnInit } from '@angular/core';
import { SessionService } from '../session.service';
import { Observable } from 'rxjs';
import { Pos } from '../pos';

@Component({
  selector: 'app-scan-user',
  templateUrl: './scan-user.component.html',
  styleUrls: ['./scan-user.component.scss']
})
export class ScanUserComponent implements OnInit {

  constructor(private sessionService: SessionService) {}

  pos$: Observable<Pos>;

  ngOnInit() {
    this.pos$ = this.sessionService.fetchPos()
  }

}
