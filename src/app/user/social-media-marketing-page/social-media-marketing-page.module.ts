import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SocialMediaMarketingPageRoutingModule } from './social-media-marketing-page-routing.module';
import { SocialMediaMarketingPageComponent } from './social-media-marketing-page.component';
import { SocialFeaturedComponent } from './social-featured/social-featured.component';
import { SmmComponent } from './smm/smm.component';
import { SmmServiceComponent } from './smm-service/smm-service.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [SocialMediaMarketingPageComponent, SocialFeaturedComponent, SmmComponent, SmmServiceComponent],
  imports: [
    CommonModule,
    SocialMediaMarketingPageRoutingModule,
    SharedModule
  ]
})
export class SocialMediaMarketingPageModule { }
