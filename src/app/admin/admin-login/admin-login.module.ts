import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLoginComponent } from './admin-login.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AdminLoginComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,  
    ReactiveFormsModule
  ]
})
export class AdminLoginModule { }
