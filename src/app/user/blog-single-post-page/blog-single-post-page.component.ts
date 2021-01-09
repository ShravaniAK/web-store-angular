import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogPostService } from '../blog-post.service';


@Component({
  selector: 'app-blog-single-post-page',
  templateUrl: './blog-single-post-page.component.html',
  styleUrls: ['./blog-single-post-page.component.css']
})
export class BlogSinglePostPageComponent implements OnInit {

  constructor(private blogService: BlogPostService, private activatedRoute: ActivatedRoute, private router: Router, private title: Title, private meta: Meta) { }

  singlePost;
  loader: boolean = true;
  location;
  ngOnInit(): void {


    this.activatedRoute.params.subscribe(params => {
      this.location = window.location.href;
      const id = params['id'];
      // console.log("id",id);
      this.blogService.fetchSinglePost(id).subscribe(
        (res) => {
          if (res) {
            console.log(res);
            this.loader = false;
            this.singlePost = res;
            this.title.setTitle(`${res.title}`);
            this.meta.addTags([
              { name: 'keywords', content: 'Angular, Universal, Example' },
              { name: 'description', content: `${res.description}` },
              { name: 'robots', content: 'index, follow' },
              { property: "og:url", content: `${this.location}` },
              { property: "og:title", content: `${res.title}` },
              { property: "og:description", content: `${res.description}` },
              { property: "og:image", content: `${res.featuredImg}` },
            ]);
          }
          else {
            this.router.navigate(["/blog"]);
          }
        },
        (err) => {
          // console.log(err);
          this.router.navigate(["/blog"]);
        }
      );
    });


  }

}
