import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmmServiceComponent } from './smm-service.component';

describe('SmmServiceComponent', () => {
  let component: SmmServiceComponent;
  let fixture: ComponentFixture<SmmServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmmServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmmServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
