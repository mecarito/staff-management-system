import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuarterlyreportsComponent } from './quarterlyreports.component';

describe('QuarterlyreportsComponent', () => {
  let component: QuarterlyreportsComponent;
  let fixture: ComponentFixture<QuarterlyreportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuarterlyreportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuarterlyreportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
