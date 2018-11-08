import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChechoutreviewComponent } from './chechoutreview.component';

describe('ChechoutreviewComponent', () => {
  let component: ChechoutreviewComponent;
  let fixture: ComponentFixture<ChechoutreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChechoutreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChechoutreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
