import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TermsAndConditionsDataComponent } from './terms-and-conditions-data.component';

describe('TermsAndConditionsDataComponent', () => {
  let component: TermsAndConditionsDataComponent;
  let fixture: ComponentFixture<TermsAndConditionsDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TermsAndConditionsDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TermsAndConditionsDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
