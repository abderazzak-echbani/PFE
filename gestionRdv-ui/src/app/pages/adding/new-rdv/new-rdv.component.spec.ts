import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewRdvComponent } from './new-rdv.component';

describe('NewRdvComponent', () => {
  let component: NewRdvComponent;
  let fixture: ComponentFixture<NewRdvComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewRdvComponent]
    });
    fixture = TestBed.createComponent(NewRdvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
