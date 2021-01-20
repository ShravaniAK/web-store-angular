import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebFeaturedComponent } from './web-featured.component';

describe('WebFeaturedComponent', () => {
  let component: WebFeaturedComponent;
  let fixture: ComponentFixture<WebFeaturedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebFeaturedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebFeaturedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
