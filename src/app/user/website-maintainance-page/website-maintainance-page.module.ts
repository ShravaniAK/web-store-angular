import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebsiteMaintainancePageRoutingModule } from './website-maintainance-page-routing.module';
import { WebsiteMaintainancePageComponent } from './website-maintainance-page.component';
import { WebsiteMaintainanceFeaturedComponent } from './website-maintainance-featured/website-maintainance-featured.component';
import { WebsiteMaintainanceComponent } from './website-maintainance/website-maintainance.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [WebsiteMaintainancePageComponent, WebsiteMaintainanceFeaturedComponent, WebsiteMaintainanceComponent],
  imports: [
    CommonModule,
    WebsiteMaintainancePageRoutingModule,
    SharedModule
  ]
})
export class WebsiteMaintainancePageModule { }
