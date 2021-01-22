import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebsiteMaintainanceComponent } from './website-maintainance.component';

describe('WebsiteMaintainanceComponent', () => {
  let component: WebsiteMaintainanceComponent;
  let fixture: ComponentFixture<WebsiteMaintainanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebsiteMaintainanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebsiteMaintainanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
