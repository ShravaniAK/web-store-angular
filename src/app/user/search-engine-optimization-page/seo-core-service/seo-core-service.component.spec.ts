import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeoCoreServiceComponent } from './seo-core-service.component';

describe('SeoCoreServiceComponent', () => {
  let component: SeoCoreServiceComponent;
  let fixture: ComponentFixture<SeoCoreServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeoCoreServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeoCoreServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
