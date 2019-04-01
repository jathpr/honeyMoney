import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScanPosComponent } from './scan-pos.component';

describe('ScanPosComponent', () => {
  let component: ScanPosComponent;
  let fixture: ComponentFixture<ScanPosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScanPosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScanPosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
