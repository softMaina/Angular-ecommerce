import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChechoutpaymentComponent } from './chechoutpayment.component';

describe('ChechoutpaymentComponent', () => {
  let component: ChechoutpaymentComponent;
  let fixture: ComponentFixture<ChechoutpaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChechoutpaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChechoutpaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
