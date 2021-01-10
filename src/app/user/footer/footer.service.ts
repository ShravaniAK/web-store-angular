import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FooterService {

  constructor() { }
  footerDetail  = new Subject<boolean>();
}
