import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ContactPageComponent } from './contact-page.component';
// import { ContactFormComponent } from './contact-form/contact-form.component';



@NgModule({
  declarations: [
    ContactPageComponent,
    // ContactFormComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
  ]
})
export class ContactPageModule { }
