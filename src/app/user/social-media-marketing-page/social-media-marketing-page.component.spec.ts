import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialMediaMarketingPageComponent } from './social-media-marketing-page.component';

describe('SocialMediaMarketingPageComponent', () => {
  let component: SocialMediaMarketingPageComponent;
  let fixture: ComponentFixture<SocialMediaMarketingPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialMediaMarketingPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialMediaMarketingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
