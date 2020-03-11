import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectroniclabComponent } from './electroniclab.component';

describe('ElectroniclabComponent', () => {
  let component: ElectroniclabComponent;
  let fixture: ComponentFixture<ElectroniclabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElectroniclabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElectroniclabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
