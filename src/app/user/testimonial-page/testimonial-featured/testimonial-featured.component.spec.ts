import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestimonialFeaturedComponent } from './testimonial-featured.component';

describe('TestimonialFeaturedComponent', () => {
  let component: TestimonialFeaturedComponent;
  let fixture: ComponentFixture<TestimonialFeaturedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestimonialFeaturedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestimonialFeaturedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
