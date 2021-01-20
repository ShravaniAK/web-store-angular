import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivacyPolicyPageRoutingModule } from './privacy-policy-page-routing.module';
import { PrivacyPolicyPageComponent } from './privacy-policy-page.component';
import { PrivacyFeaturedComponent } from './privacy-featured/privacy-featured.component';
import { PrivacyDataComponent } from './privacy-data/privacy-data.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [PrivacyPolicyPageComponent, PrivacyFeaturedComponent, PrivacyDataComponent],
  imports: [
    CommonModule,
    PrivacyPolicyPageRoutingModule,
    SharedModule
  ]
})
export class PrivacyPolicyPageModule { }
