import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChechoutbillingComponent } from './chechoutbilling.component';

describe('ChechoutbillingComponent', () => {
  let component: ChechoutbillingComponent;
  let fixture: ComponentFixture<ChechoutbillingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChechoutbillingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChechoutbillingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
