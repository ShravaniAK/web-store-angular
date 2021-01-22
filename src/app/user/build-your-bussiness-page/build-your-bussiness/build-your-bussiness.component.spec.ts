import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildYourBussinessComponent } from './build-your-bussiness.component';

describe('BuildYourBussinessComponent', () => {
  let component: BuildYourBussinessComponent;
  let fixture: ComponentFixture<BuildYourBussinessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuildYourBussinessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildYourBussinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
