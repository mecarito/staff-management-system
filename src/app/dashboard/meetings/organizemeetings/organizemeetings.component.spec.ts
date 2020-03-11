import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizemeetingsComponent } from './organizemeetings.component';

describe('OrganizemeetingsComponent', () => {
  let component: OrganizemeetingsComponent;
  let fixture: ComponentFixture<OrganizemeetingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganizemeetingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganizemeetingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
