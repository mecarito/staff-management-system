import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PastteachingloadComponent } from './pastteachingload.component';

describe('PastteachingloadComponent', () => {
  let component: PastteachingloadComponent;
  let fixture: ComponentFixture<PastteachingloadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PastteachingloadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PastteachingloadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
