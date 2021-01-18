import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchEngineOptimizationPageComponent } from './search-engine-optimization-page.component';

describe('SearchEngineOptimizationPageComponent', () => {
  let component: SearchEngineOptimizationPageComponent;
  let fixture: ComponentFixture<SearchEngineOptimizationPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchEngineOptimizationPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchEngineOptimizationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
