import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeachingloadComponent } from './teachingload.component';

describe('TeachingloadComponent', () => {
  let component: TeachingloadComponent;
  let fixture: ComponentFixture<TeachingloadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeachingloadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeachingloadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
