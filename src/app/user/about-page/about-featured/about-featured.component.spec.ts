import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutFeaturedComponent } from './about-featured.component';

describe('AboutFeaturedComponent', () => {
  let component: AboutFeaturedComponent;
  let fixture: ComponentFixture<AboutFeaturedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutFeaturedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutFeaturedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
