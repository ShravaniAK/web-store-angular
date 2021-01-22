import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebsiteMaintainanceFeaturedComponent } from './website-maintainance-featured.component';

describe('WebsiteMaintainanceFeaturedComponent', () => {
  let component: WebsiteMaintainanceFeaturedComponent;
  let fixture: ComponentFixture<WebsiteMaintainanceFeaturedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebsiteMaintainanceFeaturedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebsiteMaintainanceFeaturedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
