import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeDesignComponent } from './we-design.component';

describe('WeDesignComponent', () => {
  let component: WeDesignComponent;
  let fixture: ComponentFixture<WeDesignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeDesignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
