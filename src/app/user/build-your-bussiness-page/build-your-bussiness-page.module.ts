import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BuildYourBussinessPageRoutingModule } from './build-your-bussiness-page-routing.module';
import { BuildYourBussinessPageComponent } from './build-your-bussiness-page.component';
import { BuildYourBussinessFeaturedComponent } from './build-your-bussiness-featured/build-your-bussiness-featured.component';
import { BuildYourBussinessComponent } from './build-your-bussiness/build-your-bussiness.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [BuildYourBussinessPageComponent, BuildYourBussinessFeaturedComponent, BuildYourBussinessComponent],
  imports: [
    CommonModule,
    BuildYourBussinessPageRoutingModule,
    SharedModule
  ]
})
export class BuildYourBussinessPageModule { }
