import { Component, OnInit } from '@angular/core';
import { BlogPostService } from '../../blog-post.service';


@Component({
  selector: 'app-show-blogs',
  templateUrl: './show-blogs.component.html',
  styleUrls: ['./show-blogs.component.css']
})
export class ShowBlogsComponent implements OnInit {

  constructor(private blogService : BlogPostService) { }

  blogPost;
  loader = ["","","",""];

  ngOnInit(): void {
    this.blogService.fetchPost().subscribe(
      (res)=>{
        console.log(res);
        this.blogPost = res;
        this.loader=[];
      },
      (err)=>{
        console.log(err);
      }
    );

  }

}
