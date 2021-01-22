import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
// import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { FooterComponent } from './user/footer/footer.component';
import { HeaderComponent } from './user/header/header.component';


import { AdminLoginModule } from './admin/admin-login/admin-login.module';
import { AdminDashboardModule } from './admin/admin-dashboard/admin-dashboard.module';
import { HomePageModule } from './user/home-page/home-page.module';
import { BlogPageModule } from './user/blog-page/blog-page.module';
import { BlogSinglePostPageModule } from './user/blog-single-post-page/blog-single-post-page.module';
import { ContactPageModule } from './user/contact-page/contact-page.module';
import { AboutPageModule } from './user/about-page/about-page.module';
import { PricingPageModule } from './user/pricing-page/pricing-page.module';
import { PrivacyPolicyPageModule } from './user/privacy-policy-page/privacy-policy-page.module';
import { TermsAndConditionsPageModule } from './user/terms-and-conditions-page/terms-and-conditions-page.module';
import { TestimonialPageModule } from './user/testimonial-page/testimonial-page.module';
import { SearchEngineOptimizationPageModule } from './user/search-engine-optimization-page/search-engine-optimization-page.module';
import { SocialMediaMarketingPageModule } from './user/social-media-marketing-page/social-media-marketing-page.module';
import { WebDevelopmentPageModule } from './user/web-development-page/web-development-page.module';
import { BuildYourBussinessPageModule } from './user/build-your-bussiness-page/build-your-bussiness-page.module';
import { WebsiteMaintainancePageModule } from './user/website-maintainance-page/website-maintainance-page.module';
import { PortfolioPageModule } from './user/portfolio-page/portfolio-page.module';

@NgModule({
  declarations: [
    AppComponent,   
    HeaderComponent,
    FooterComponent, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    // NgxSkeletonLoaderModule.forRoot(),
    // InfiniteScrollModule,
    AdminLoginModule,
    AdminDashboardModule,
    HomePageModule,
    BlogPageModule,
    BlogSinglePostPageModule,
    ContactPageModule,
    AboutPageModule,
    PricingPageModule,
    PrivacyPolicyPageModule,
    TermsAndConditionsPageModule,
    TestimonialPageModule,
    SearchEngineOptimizationPageModule,
    SocialMediaMarketingPageModule,
    WebDevelopmentPageModule,
    BuildYourBussinessPageModule,
    WebsiteMaintainancePageModule,
    PortfolioPageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
