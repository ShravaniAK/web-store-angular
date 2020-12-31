import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurPortfolioComponent } from './our-portfolio.component';

describe('OurPortfolioComponent', () => {
  let component: OurPortfolioComponent;
  let fixture: ComponentFixture<OurPortfolioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurPortfolioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurPortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
