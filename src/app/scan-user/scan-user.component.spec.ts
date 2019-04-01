import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScanUserComponent } from './scan-user.component';

describe('ScanUserComponent', () => {
  let component: ScanUserComponent;
  let fixture: ComponentFixture<ScanUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScanUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScanUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
