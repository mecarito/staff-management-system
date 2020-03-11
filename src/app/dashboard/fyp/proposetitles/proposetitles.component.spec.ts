import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProposetitlesComponent } from './proposetitles.component';

describe('ProposetitlesComponent', () => {
  let component: ProposetitlesComponent;
  let fixture: ComponentFixture<ProposetitlesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProposetitlesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProposetitlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
