import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdvsPatientComponent } from './rdvs-patient.component';

describe('RdvsPatientComponent', () => {
  let component: RdvsPatientComponent;
  let fixture: ComponentFixture<RdvsPatientComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RdvsPatientComponent]
    });
    fixture = TestBed.createComponent(RdvsPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
