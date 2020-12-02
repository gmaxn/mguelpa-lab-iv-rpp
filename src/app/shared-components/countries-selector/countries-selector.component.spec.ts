import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountriesSelectorComponent } from './countries-selector.component';

describe('CountriesSelectorComponent', () => {
  let component: CountriesSelectorComponent;
  let fixture: ComponentFixture<CountriesSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountriesSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountriesSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
