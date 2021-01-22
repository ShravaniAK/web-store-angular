import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortfolioPageRoutingModule } from './portfolio-page-routing.module';
import { PortfolioPageComponent } from './portfolio-page.component';
import { PortfolioFeaturedComponent } from './portfolio-featured/portfolio-featured.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [PortfolioPageComponent, PortfolioFeaturedComponent, PortfolioComponent],
  imports: [
    CommonModule,
    PortfolioPageRoutingModule,
    SharedModule
  ]
})
export class PortfolioPageModule { }
