import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceptedtitlesComponent } from './acceptedtitles.component';

describe('AcceptedtitlesComponent', () => {
  let component: AcceptedtitlesComponent;
  let fixture: ComponentFixture<AcceptedtitlesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcceptedtitlesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcceptedtitlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
