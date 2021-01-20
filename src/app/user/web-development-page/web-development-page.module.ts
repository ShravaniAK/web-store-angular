import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebDevelopmentPageRoutingModule } from './web-development-page-routing.module';
import { WebDevelopmentPageComponent } from './web-development-page.component';
import { WebFeaturedComponent } from './web-featured/web-featured.component';
import { WebDevelopmentComponent } from './web-development/web-development.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [WebDevelopmentPageComponent, WebFeaturedComponent, WebDevelopmentComponent],
  imports: [
    CommonModule,
    WebDevelopmentPageRoutingModule,
    SharedModule
  ]
})
export class WebDevelopmentPageModule { }
