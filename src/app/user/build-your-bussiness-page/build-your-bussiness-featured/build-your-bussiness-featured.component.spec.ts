import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildYourBussinessFeaturedComponent } from './build-your-bussiness-featured.component';

describe('BuildYourBussinessFeaturedComponent', () => {
  let component: BuildYourBussinessFeaturedComponent;
  let fixture: ComponentFixture<BuildYourBussinessFeaturedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuildYourBussinessFeaturedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildYourBussinessFeaturedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
