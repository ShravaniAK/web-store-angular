import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogSinglePostPageComponent } from './blog-single-post-page.component';
import { RouterModule } from '@angular/router';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';



@NgModule({
  declarations: [
    BlogSinglePostPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgxSkeletonLoaderModule.forRoot()
  ]
})
export class BlogSinglePostPageModule { }
