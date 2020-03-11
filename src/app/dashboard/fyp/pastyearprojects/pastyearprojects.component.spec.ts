import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PastyearprojectsComponent } from './pastyearprojects.component';

describe('PastyearprojectsComponent', () => {
  let component: PastyearprojectsComponent;
  let fixture: ComponentFixture<PastyearprojectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PastyearprojectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PastyearprojectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
