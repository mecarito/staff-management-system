import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PastmeetingsComponent } from './pastmeetings.component';

describe('PastmeetingsComponent', () => {
  let component: PastmeetingsComponent;
  let fixture: ComponentFixture<PastmeetingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PastmeetingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PastmeetingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
