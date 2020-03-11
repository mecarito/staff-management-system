import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AskingleaveComponent } from './askingleave.component';

describe('AskingleaveComponent', () => {
  let component: AskingleaveComponent;
  let fixture: ComponentFixture<AskingleaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AskingleaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AskingleaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
