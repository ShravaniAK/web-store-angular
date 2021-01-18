import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchEngineOptimizationPageRoutingModule } from './search-engine-optimization-page-routing.module';
import { SearchEngineOptimizationPageComponent } from './search-engine-optimization-page.component';
import { SeoComponent } from './seo/seo.component';
import { SeoCoreServiceComponent } from './seo-core-service/seo-core-service.component';
import { FeaturedSeoComponent } from './featured-seo/featured-seo.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [SearchEngineOptimizationPageComponent, SeoComponent, SeoCoreServiceComponent, FeaturedSeoComponent],
  imports: [
    CommonModule,
    SearchEngineOptimizationPageRoutingModule,
    SharedModule
  ]
})
export class SearchEngineOptimizationPageModule { }
