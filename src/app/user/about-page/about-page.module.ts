import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutPageRoutingModule } from './about-page-routing.module';
import { AboutPageComponent } from './about-page.component';
import { AboutFeaturedComponent } from './about-featured/about-featured.component';
import { OurVisionComponent } from './our-vision/our-vision.component';
import { OurPerformanceComponent } from './our-performance/our-performance.component';
import { WhyChooseUsComponent } from './why-choose-us/why-choose-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [AboutPageComponent, AboutFeaturedComponent, OurVisionComponent, OurPerformanceComponent, WhyChooseUsComponent, AboutUsComponent],
  imports: [
    CommonModule,
    AboutPageRoutingModule,
    SharedModule
  ]
})
export class AboutPageModule { }
