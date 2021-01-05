import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogsFeaturedThemeComponent } from './blogs-featured-theme.component';

describe('BlogsFeaturedThemeComponent', () => {
  let component: BlogsFeaturedThemeComponent;
  let fixture: ComponentFixture<BlogsFeaturedThemeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogsFeaturedThemeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogsFeaturedThemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
