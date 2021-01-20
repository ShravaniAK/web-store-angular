import { trigger, transition, style, query, group,  animateChild, animate } from '@angular/animations';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';


 


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('anim', [
      transition('* => *', [
            query(':enter', [style({position:'relative',opacity:'0.2'}), animate('1s ease-in-out', style({  opacity:'1'}))], {
                optional: true,
            }),   
      ])
    ]) ]
})



export class AppComponent {

  public getRouterOutletState(outlet) {
    return outlet.isActivated ? outlet.activatedRoute : '';
  }
}
