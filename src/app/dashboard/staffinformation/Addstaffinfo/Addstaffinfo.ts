import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddstaffinfoComponent } from './Addstaffinfo.component';

describe('MyprofileComponent', () => {
  let component: AddstaffinfoComponent;
  let fixture: ComponentFixture<AddstaffinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddstaffinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent( AddstaffinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
