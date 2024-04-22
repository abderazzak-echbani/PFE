import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeographyChartComponent } from './geography-chart.component';

describe('GeographyChartComponent', () => {
  let component: GeographyChartComponent;
  let fixture: ComponentFixture<GeographyChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GeographyChartComponent]
    });
    fixture = TestBed.createComponent(GeographyChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
