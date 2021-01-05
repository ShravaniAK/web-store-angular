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

  error = false;
  spinner : boolean = false;
  
  login(){
    if(this.loginForm.valid){
      this.spinner = true;
      this.error = false;
        console.log(this.loginForm.value);
        let email = this.loginForm.value.email;
        let password = this.loginForm.value.password;
        this.loginForm.reset();
        this.blogService.login(email, password).subscribe(
          (res)=>{
            console.log(res);
            localStorage.setItem("webstore-admin-token",res.idToken);
            this.spinner = false;
            this.router.navigate(["/admin/dashboard"]);

          },(err)=>{
            console.log(err);
            this.spinner = false;
            this.error = err.error.error.message;
        });
    }
  }
}
