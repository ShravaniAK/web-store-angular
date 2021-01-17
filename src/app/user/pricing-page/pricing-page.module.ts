import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PricingPageRoutingModule } from './pricing-page-routing.module';
import { PricingPageComponent } from './pricing-page.component';
import { PricingTableComponent } from './pricing-table/pricing-table.component';



@NgModule({
  declarations: [PricingPageComponent, PricingTableComponent],
  imports: [
    CommonModule,
    PricingPageRoutingModule
  ]
})
export class PricingPageModule { }
