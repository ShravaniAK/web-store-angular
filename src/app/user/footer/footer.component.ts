import { Component, OnInit } from '@angular/core';
import { FooterService } from './footer.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  footerDetail :boolean = true;
  constructor(private footerDetailService : FooterService) { 
    this.footerDetailService.footerDetail.subscribe(
      res => {
        this.footerDetail = res;
      }
    );

  }
  ngOnInit(): void {
  }

}
