import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebDevelopmentPageComponent } from './web-development-page.component';

describe('WebDevelopmentPageComponent', () => {
  let component: WebDevelopmentPageComponent;
  let fixture: ComponentFixture<WebDevelopmentPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebDevelopmentPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebDevelopmentPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
