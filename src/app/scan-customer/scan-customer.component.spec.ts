import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScanCustomerComponent } from './scan-customer.component';

describe('ScanCustomerComponent', () => {
  let component: ScanCustomerComponent;
  let fixture: ComponentFixture<ScanCustomerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScanCustomerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScanCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
