import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestimonialPageRoutingModule } from './testimonial-page-routing.module';
import { TestimonialPageComponent } from './testimonial-page.component';
import { TestimonialFeaturedComponent } from './testimonial-featured/testimonial-featured.component';
import { TestimonialDataComponent } from './testimonial-data/testimonial-data.component';


@NgModule({
  declarations: [TestimonialPageComponent, TestimonialFeaturedComponent, TestimonialDataComponent],
  imports: [
    CommonModule,
    TestimonialPageRoutingModule
  ]
})
export class TestimonialPageModule { }
