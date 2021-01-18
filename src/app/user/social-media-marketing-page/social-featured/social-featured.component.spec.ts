import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialFeaturedComponent } from './social-featured.component';

describe('SocialFeaturedComponent', () => {
  let component: SocialFeaturedComponent;
  let fixture: ComponentFixture<SocialFeaturedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialFeaturedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialFeaturedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
