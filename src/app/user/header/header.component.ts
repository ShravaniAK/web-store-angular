import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { HeaderService } from './header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations: [
    trigger('mobileNav', [
      // ...
      state('invisible', style({
        opacity: 1
      })),
      state('visible', style({
        left:0,
        opacity: 1
      })),
      transition('invisible => visible', [
        animate('0.4s ease-in-out')
      ]),
      transition('visible => invisible', [
        animate('0.4s ease-in-out')
      ]),
      
    ]),
    trigger('mobileBlackBackground', [
      // ...
      state('invisible', style({
        opacity: 1
      })),
      state('visible', style({
        position:' fixed',
        top:0,
        left:0,
        right:0,
        height:'100vh',
        backgroundColor: 'rgb(0,0,0,0.6)',
        zIndex: 998
      })),
      transition('invisible <=> visible', [
        animate('0s ease-in-out')
      ]),
      
    ]),
  ]
})
export class HeaderComponent implements OnInit {
  headerDetail : boolean  = true; 

  constructor(private headerDetailService : HeaderService) {
      this.headerDetailService.headerDetail.subscribe(
        res => {
          this.headerDetail = res;
        }
      );
   }

  ngOnInit(): void {
  }
  tglState = true;

  toggle() {
    this.tglState = !this.tglState;
  }

}
