import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogSinglePostPageComponent } from './blog-single-post-page.component';

describe('BlogSinglePostPageComponent', () => {
  let component: BlogSinglePostPageComponent;
  let fixture: ComponentFixture<BlogSinglePostPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogSinglePostPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogSinglePostPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
