import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebsiteMaintainancePageComponent } from './website-maintainance-page.component';

describe('WebsiteMaintainancePageComponent', () => {
  let component: WebsiteMaintainancePageComponent;
  let fixture: ComponentFixture<WebsiteMaintainancePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebsiteMaintainancePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebsiteMaintainancePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
