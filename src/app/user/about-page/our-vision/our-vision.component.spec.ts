import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurVisionComponent } from './our-vision.component';

describe('OurVisionComponent', () => {
  let component: OurVisionComponent;
  let fixture: ComponentFixture<OurVisionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurVisionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurVisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
