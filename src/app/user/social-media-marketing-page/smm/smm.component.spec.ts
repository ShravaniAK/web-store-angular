import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmmComponent } from './smm.component';

describe('SmmComponent', () => {
  let component: SmmComponent;
  let fixture: ComponentFixture<SmmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
