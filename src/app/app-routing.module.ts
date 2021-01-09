import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { CreateNewPostComponent } from './admin/admin-dashboard/create-new-post/create-new-post.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { HomePageComponent } from './user/home-page/home-page.component';
import { BlogPageComponent } from './user/blog-page/blog-page.component';
import { BlogSinglePostPageComponent } from './user/blog-single-post-page/blog-single-post-page.component';
import { ContactPageComponent } from './user/contact-page/contact-page.component';


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
  { path:'blog/:id', component : BlogSinglePostPageComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes,{scrollPositionRestoration: 'top'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
