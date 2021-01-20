import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PricingPageRoutingModule } from './pricing-page-routing.module';
import { PricingPageComponent } from './pricing-page.component';
import { PricingTableComponent } from './pricing-table/pricing-table.component';
import { PricingFeaturedComponent } from './pricing-featured/pricing-featured.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [PricingPageComponent, PricingTableComponent, PricingFeaturedComponent],
  imports: [
    CommonModule,
    PricingPageRoutingModule,
    SharedModule
  ]
})
export class PricingPageModule { }
