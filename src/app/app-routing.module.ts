import { NgModule } from '@angular/core';
import {  Routes,RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'contact', component: ContactPageComponent },
  { path: 'admin-login', component: AdminLoginComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
