import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdvsComponent } from './rdvs.component';

describe('RdvsComponent', () => {
  let component: RdvsComponent;
  let fixture: ComponentFixture<RdvsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RdvsComponent]
    });
    fixture = TestBed.createComponent(RdvsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
