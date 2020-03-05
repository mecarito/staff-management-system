import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionalcoursesComponent } from './professionalcourses.component';

describe('ProfessionalcoursesComponent', () => {
  let component: ProfessionalcoursesComponent;
  let fixture: ComponentFixture<ProfessionalcoursesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfessionalcoursesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessionalcoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
