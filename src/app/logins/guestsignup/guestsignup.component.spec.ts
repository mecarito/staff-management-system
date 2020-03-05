import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestsignupComponent } from './guestsignup.component';

describe('GuestsignupComponent', () => {
  let component: GuestsignupComponent;
  let fixture: ComponentFixture<GuestsignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuestsignupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuestsignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
