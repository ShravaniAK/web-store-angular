import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BlogService } from '../blog-service-req/blog.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  constructor(private blogService : BlogService, private router : Router) { }

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(4)]),

  });

  ngOnInit(): void {
  }

  error;

  login(){
    if(this.loginForm.valid){
        console.log(this.loginForm.value);
        let email = this.loginForm.value.email;
        let password = this.loginForm.value.password;
        this.loginForm.reset();
        this.blogService.login(email, password).subscribe(
          (res)=>{
            console.log(res);
            localStorage.setItem("webstore-admin-token",res.idToken);
            this.router.navigate(["/admin/dashboard"]);
          },(err)=>{
            console.log(err);
            this.error = err.error.error.message;
        });
    }
  }
}
