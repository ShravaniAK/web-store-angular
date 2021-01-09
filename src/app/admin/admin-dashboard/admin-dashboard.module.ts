import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDashboardComponent } from './admin-dashboard.component';
import { CreateNewPostComponent } from './create-new-post/create-new-post.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AdminDashboardComponent,
    CreateNewPostComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,   
    ReactiveFormsModule
  ],
})
export class AdminDashboardModule { }
