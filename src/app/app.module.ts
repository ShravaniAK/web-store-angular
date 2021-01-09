import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

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
    NgxSkeletonLoaderModule.forRoot(),
    InfiniteScrollModule,
    AdminLoginModule,
    AdminDashboardModule,
    HomePageModule,
    BlogPageModule,
    BlogSinglePostPageModule,
    ContactPageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
