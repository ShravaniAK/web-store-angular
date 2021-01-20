import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactFeaturedComponent } from './contact-featured.component';

describe('ContactFeaturedComponent', () => {
  let component: ContactFeaturedComponent;
  let fixture: ComponentFixture<ContactFeaturedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactFeaturedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactFeaturedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
