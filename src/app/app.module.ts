import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { OurServicesComponent } from './home/our-services/our-services.component';
import { OurPortfolioComponent } from './home/our-portfolio/our-portfolio.component';
import { HowWeAreComponent } from './home/how-we-are/how-we-are.component';
import { QuickQuoteFormComponent } from './home/quick-quote-form/quick-quote-form.component';
import { FeaturedComponent } from './home/featured/featured.component';
import { BenifitsComponent } from './home/benifits/benifits.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { StepsComponent } from './home/steps/steps.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { WeDesignComponent } from './home/we-design/we-design.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    OurServicesComponent,
    OurPortfolioComponent,
    HowWeAreComponent,
    QuickQuoteFormComponent,
    FeaturedComponent,
    BenifitsComponent,
    ContactFormComponent,
    StepsComponent,
    ContactPageComponent,
    WeDesignComponent,
    AdminLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
