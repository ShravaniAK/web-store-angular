import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestimonialDataComponent } from './testimonial-data.component';

describe('TestimonialDataComponent', () => {
  let component: TestimonialDataComponent;
  let fixture: ComponentFixture<TestimonialDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestimonialDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestimonialDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
