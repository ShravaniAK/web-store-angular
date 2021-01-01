import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
    BenifitsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
