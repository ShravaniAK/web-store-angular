import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TermsAndConditionsFeaturedComponent } from './terms-and-conditions-featured.component';

describe('TermsAndConditionsFeaturedComponent', () => {
  let component: TermsAndConditionsFeaturedComponent;
  let fixture: ComponentFixture<TermsAndConditionsFeaturedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TermsAndConditionsFeaturedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TermsAndConditionsFeaturedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
