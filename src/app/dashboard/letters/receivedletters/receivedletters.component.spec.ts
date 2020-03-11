import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceivedlettersComponent } from './receivedletters.component';

describe('ReceivedlettersComponent', () => {
  let component: ReceivedlettersComponent;
  let fixture: ComponentFixture<ReceivedlettersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceivedlettersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceivedlettersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
