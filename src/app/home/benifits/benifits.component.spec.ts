import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BenifitsComponent } from './benifits.component';

describe('BenifitsComponent', () => {
  let component: BenifitsComponent;
  let fixture: ComponentFixture<BenifitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BenifitsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BenifitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
