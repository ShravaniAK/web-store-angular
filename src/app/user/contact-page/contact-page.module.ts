import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ContactPageComponent } from './contact-page.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ContactPageComponent,
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
