import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingmeetingsComponent } from './pendingmeetings.component';

describe('PendingmeetingsComponent', () => {
  let component: PendingmeetingsComponent;
  let fixture: ComponentFixture<PendingmeetingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PendingmeetingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PendingmeetingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
