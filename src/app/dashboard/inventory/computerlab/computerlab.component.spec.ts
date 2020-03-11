import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComputerlabComponent } from './computerlab.component';

describe('ComputerlabComponent', () => {
  let component: ComputerlabComponent;
  let fixture: ComponentFixture<ComputerlabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComputerlabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComputerlabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
