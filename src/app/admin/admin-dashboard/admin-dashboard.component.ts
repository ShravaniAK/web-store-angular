import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShowBlogsComponent } from 'src/app/user/blog-page/show-blogs/show-blogs.component';
import { FooterService } from 'src/app/user/footer/footer.service';
import { HeaderService } from 'src/app/user/header/header.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  sidenav = false;
  constructor(private router : Router, private headerDetailService : HeaderService ,private footerDetailService : FooterService ) { }

  ngOnInit(): void {
      this.headerDetailService.headerDetail.next(false);
      this.footerDetailService.footerDetail.next(false);
  }
  logout(){
    localStorage.removeItem("webstore-admin-token");
    this.router.navigate(["/admin-login"]);
  }
  ngOnDestroy(){
    this.headerDetailService.headerDetail.next(true);
    this.footerDetailService.footerDetail.next(true);
  }

  
  toggle(){
    this.sidenav = !this.sidenav;
  }

  getSomeClass(){
    
    return {left:this.sidenav , shadow: this.sidenav};
}


}
