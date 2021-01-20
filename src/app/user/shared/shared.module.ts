import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactFormComponent } from '../contact-page/contact-form/contact-form.component';
import { QuickQuoteFormComponent } from '../home-page/quick-quote-form/quick-quote-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ContactFormComponent,
    QuickQuoteFormComponent
  ],
  imports: [
    CommonModule, FormsModule ,ReactiveFormsModule
  ],
  exports:[
    ContactFormComponent, QuickQuoteFormComponent
  ]
})
export class SharedModule { }
