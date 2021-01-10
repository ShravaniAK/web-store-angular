import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurPerformanceComponent } from './our-performance.component';

describe('OurPerformanceComponent', () => {
  let component: OurPerformanceComponent;
  let fixture: ComponentFixture<OurPerformanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurPerformanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurPerformanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
