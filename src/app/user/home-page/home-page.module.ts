import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeaturedComponent } from './featured/featured.component';
import { WeDesignComponent } from './we-design/we-design.component';
import { OurServicesComponent } from './our-services/our-services.component';
import { HowWeAreComponent } from './how-we-are/how-we-are.component';
import { StepsComponent } from './steps/steps.component';
import { OurPortfolioComponent } from './our-portfolio/our-portfolio.component';
import { BenifitsComponent } from './benifits/benifits.component';
import { RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { QuickQuoteFormComponent } from './quick-quote-form/quick-quote-form.component';
import { ContactFormComponent } from '../contact-page/contact-form/contact-form.component';



@NgModule({
  declarations: [
    HomePageComponent,
    FeaturedComponent,
    WeDesignComponent,
    OurServicesComponent,
    HowWeAreComponent,
    StepsComponent,
    OurPortfolioComponent,
    BenifitsComponent,
    ContactFormComponent,
    QuickQuoteFormComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    // ContactFormComponent,
  ]
})
export class HomePageModule { }
