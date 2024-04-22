import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserMainpageComponent } from './user-mainpage.component';

describe('UserMainpageComponent', () => {
  let component: UserMainpageComponent;
  let fixture: ComponentFixture<UserMainpageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserMainpageComponent]
    });
    fixture = TestBed.createComponent(UserMainpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
