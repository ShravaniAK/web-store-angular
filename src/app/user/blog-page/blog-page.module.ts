import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogPageComponent } from './blog-page.component';
import { BlogsFeaturedThemeComponent } from './blogs-featured-theme/blogs-featured-theme.component';
import { ShowBlogsComponent } from './show-blogs/show-blogs.component';
import { RouterModule } from '@angular/router';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    BlogPageComponent,
    ShowBlogsComponent,
    BlogsFeaturedThemeComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgxSkeletonLoaderModule.forRoot(),
    SharedModule
  ]
})
export class BlogPageModule { }
