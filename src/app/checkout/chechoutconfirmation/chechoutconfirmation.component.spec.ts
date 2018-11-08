import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChechoutconfirmationComponent } from './chechoutconfirmation.component';

describe('ChechoutconfirmationComponent', () => {
  let component: ChechoutconfirmationComponent;
  let fixture: ComponentFixture<ChechoutconfirmationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChechoutconfirmationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChechoutconfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
