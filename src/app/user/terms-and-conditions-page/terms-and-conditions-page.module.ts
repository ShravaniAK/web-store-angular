import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TermsAndConditionsPageRoutingModule } from './terms-and-conditions-page-routing.module';
import { TermsAndConditionsPageComponent } from './terms-and-conditions-page.component';
import { TermsAndConditionsFeaturedComponent } from './terms-and-conditions-featured/terms-and-conditions-featured.component';
import { TermsAndConditionsDataComponent } from './terms-and-conditions-data/terms-and-conditions-data.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [TermsAndConditionsPageComponent, TermsAndConditionsFeaturedComponent, TermsAndConditionsDataComponent],
  imports: [
    CommonModule,
    TermsAndConditionsPageRoutingModule,
    SharedModule
  ]
})
export class TermsAndConditionsPageModule { }
