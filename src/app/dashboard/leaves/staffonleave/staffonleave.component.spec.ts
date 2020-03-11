import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffonleaveComponent } from './staffonleave.component';

describe('StaffonleaveComponent', () => {
  let component: StaffonleaveComponent;
  let fixture: ComponentFixture<StaffonleaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaffonleaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffonleaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
