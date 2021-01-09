import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickQuoteFormComponent } from './quick-quote-form.component';

describe('QuickQuoteFormComponent', () => {
  let component: QuickQuoteFormComponent;
  let fixture: ComponentFixture<QuickQuoteFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuickQuoteFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuickQuoteFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
