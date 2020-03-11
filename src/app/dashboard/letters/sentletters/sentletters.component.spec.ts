import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SentlettersComponent } from './sentletters.component';

describe('SentlettersComponent', () => {
  let component: SentlettersComponent;
  let fixture: ComponentFixture<SentlettersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SentlettersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SentlettersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
