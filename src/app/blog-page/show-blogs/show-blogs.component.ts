import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/blog-service-req/blog.service';

@Component({
  selector: 'app-show-blogs',
  templateUrl: './show-blogs.component.html',
  styleUrls: ['./show-blogs.component.css']
})
export class ShowBlogsComponent implements OnInit {

  constructor(private blogService : BlogService) { }

  blogPost;

  ngOnInit(): void {
    this.blogService.fetchPost().subscribe(
      (res)=>{
        console.log(res);
        this.blogPost = res;
      },
      (err)=>{
        console.log(err);
      }
    );

  }

}
