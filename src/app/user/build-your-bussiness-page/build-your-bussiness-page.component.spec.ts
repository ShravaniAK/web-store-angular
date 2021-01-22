import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildYourBussinessPageComponent } from './build-your-bussiness-page.component';

describe('BuildYourBussinessPageComponent', () => {
  let component: BuildYourBussinessPageComponent;
  let fixture: ComponentFixture<BuildYourBussinessPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuildYourBussinessPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildYourBussinessPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
