import { NgModule } from '@angular/core';
import {  Routes,RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { CreateNewPostComponent } from './admin-dashboard/create-new-post/create-new-post.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'contact', component: ContactPageComponent },
  { path: 'admin-login', component: AdminLoginComponent },
  { path: 'admin/dashboard', component: AdminDashboardComponent ,
      children: [
        { path : "", redirectTo : "create-new-post", pathMatch : 'full'  },
        { path : "create-new-post", component : CreateNewPostComponent }
      ]
},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
