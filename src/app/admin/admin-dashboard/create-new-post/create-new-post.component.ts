import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';
import { AdminDashboardService } from '../../admin-dashboard.service';

@Component({
  selector: 'app-create-new-post',
  templateUrl: './create-new-post.component.html',
  styleUrls: ['./create-new-post.component.css']
})
export class CreateNewPostComponent implements OnInit {

  constructor(private adminDashboardService: AdminDashboardService) { }

  createPostForm = new FormGroup({
    url: new FormControl('', [Validators.required]),
    title: new FormControl('', [Validators.required]),
    author: new FormControl('', [Validators.required]),
    date: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    featuredImg: new FormControl('', [Validators.required]),
    postCode: new FormControl('', [Validators.required]),

  });

  ngOnInit(): void {

  }

  error;
  spinner: boolean = false;



  createPost() {
    if (this.createPostForm.valid) {
      this.spinner = true;
      this.error = false;
      this.adminDashboardService.createPost(this.createPostForm.value).subscribe(
        (res) => {
          // console.log(res);
          let response = res;
          let newData = {
            [this.createPostForm.value.url]: this.createPostForm.value
          };
          Object.assign(response, newData);
          // console.log(newData);
          this.adminDashboardService.savePost(response).subscribe(
            (res) => {
              // console.log(res);
              this.createPostForm.reset();
              this.spinner = false;
            },
            (err) => {
              // console.log(err);
              this.spinner = false;
              this.error = "LOGIN_TOKEN_EXPIRED";
            }
          );
        },
        (err) => {
          // console.log(err);
          this.spinner = false;
          this.error = "FAILED_SERVER_DOWN";
        }
      );

    }
  }
}
