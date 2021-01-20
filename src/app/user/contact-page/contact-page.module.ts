import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ContactPageComponent } from './contact-page.component';
import { SharedModule } from '../shared/shared.module';
import { ContactFeaturedComponent } from './contact-featured/contact-featured.component';

@NgModule({
  declarations: [
    ContactPageComponent,
    ContactFeaturedComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
  exports:[
  ]
})
export class ContactPageModule { }
