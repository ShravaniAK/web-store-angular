import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingFeaturedComponent } from './pricing-featured.component';

describe('PricingFeaturedComponent', () => {
  let component: PricingFeaturedComponent;
  let fixture: ComponentFixture<PricingFeaturedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PricingFeaturedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PricingFeaturedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
