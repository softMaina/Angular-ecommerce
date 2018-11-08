import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChechoutshippingComponent } from './chechoutshipping.component';

describe('ChechoutshippingComponent', () => {
  let component: ChechoutshippingComponent;
  let fixture: ComponentFixture<ChechoutshippingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChechoutshippingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChechoutshippingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
