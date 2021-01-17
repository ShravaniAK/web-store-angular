import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivacyFeaturedComponent } from './privacy-featured.component';

describe('PrivacyFeaturedComponent', () => {
  let component: PrivacyFeaturedComponent;
  let fixture: ComponentFixture<PrivacyFeaturedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrivacyFeaturedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivacyFeaturedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
