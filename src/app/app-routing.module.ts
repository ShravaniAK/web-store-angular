import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { CreateNewPostComponent } from './admin/admin-dashboard/create-new-post/create-new-post.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { HomePageComponent } from './user/home-page/home-page.component';
import { BlogPageComponent } from './user/blog-page/blog-page.component';
import { BlogSinglePostPageComponent } from './user/blog-single-post-page/blog-single-post-page.component';
import { ContactPageComponent } from './user/contact-page/contact-page.component';
import { AboutPageComponent } from './user/about-page/about-page.component';
import { PricingPageComponent } from './user/pricing-page/pricing-page.component';
import { PrivacyPolicyPageComponent } from './user/privacy-policy-page/privacy-policy-page.component';
import { TermsAndConditionsPageComponent } from './user/terms-and-conditions-page/terms-and-conditions-page.component';
import { TestimonialPageComponent } from './user/testimonial-page/testimonial-page.component';
import { SearchEngineOptimizationPageComponent } from './user/search-engine-optimization-page/search-engine-optimization-page.component';
import { SocialMediaMarketingPageComponent } from './user/social-media-marketing-page/social-media-marketing-page.component';
import { WebDevelopmentPageComponent } from './user/web-development-page/web-development-page.component';
import { BuildYourBussinessPageComponent } from './user/build-your-bussiness-page/build-your-bussiness-page.component';
import { WebsiteMaintainancePageComponent } from './user/website-maintainance-page/website-maintainance-page.component';
import { PortfolioPageComponent } from './user/portfolio-page/portfolio-page.component';


const routes: Routes = [
  { path: '', component:HomePageComponent},
  { path: 'contact', component: ContactPageComponent },
  { path: 'admin-login', component: AdminLoginComponent },
  {
    path: 'admin/dashboard', component: AdminDashboardComponent,
    children: [
      { path: "", redirectTo: "create-new-post", pathMatch: 'full' },
      { path: "create-new-post", component: CreateNewPostComponent }
    ]
  },
  { path:'blog', component : BlogPageComponent },
  { path:'blog/:id', component : BlogSinglePostPageComponent },
  { path:'about', component : AboutPageComponent },
  { path:'pricing', component : PricingPageComponent },
  { path:'privacy-policy', component : PrivacyPolicyPageComponent },
  { path:'terms-and-conditions', component : TermsAndConditionsPageComponent },
  { path:'testimonial', component : TestimonialPageComponent },
  { path:'services', redirectTo : 'services/web-development', pathMatch : 'full' },
  { path:'services/search-engine-optimization', component : SearchEngineOptimizationPageComponent },
  { path:'services/social-media-marketing', component : SocialMediaMarketingPageComponent },
  { path:'services/web-development', component : WebDevelopmentPageComponent },
  { path:'services/build-your-bussiness-a-brand', component : BuildYourBussinessPageComponent },
  { path:'services/website-maintainance', component : WebsiteMaintainancePageComponent },
  { path:'portfolio', component : PortfolioPageComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes,{scrollPositionRestoration: 'top'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
