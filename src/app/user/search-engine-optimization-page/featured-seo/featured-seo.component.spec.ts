import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedSeoComponent } from './featured-seo.component';

describe('FeaturedSeoComponent', () => {
  let component: FeaturedSeoComponent;
  let fixture: ComponentFixture<FeaturedSeoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeaturedSeoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturedSeoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
