import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivacyDataComponent } from './privacy-data.component';

describe('PrivacyDataComponent', () => {
  let component: PrivacyDataComponent;
  let fixture: ComponentFixture<PrivacyDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrivacyDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivacyDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
