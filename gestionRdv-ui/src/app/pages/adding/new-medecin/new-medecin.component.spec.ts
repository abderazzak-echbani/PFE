import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewMedecinComponent } from './new-medecin.component';

describe('NewMedecinComponent', () => {
  let component: NewMedecinComponent;
  let fixture: ComponentFixture<NewMedecinComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewMedecinComponent]
    });
    fixture = TestBed.createComponent(NewMedecinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
