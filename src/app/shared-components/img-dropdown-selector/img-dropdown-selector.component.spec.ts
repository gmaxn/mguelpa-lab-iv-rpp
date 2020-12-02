import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgDropdownSelectorComponent } from './img-dropdown-selector.component';

describe('ImgDropdownSelectorComponent', () => {
  let component: ImgDropdownSelectorComponent;
  let fixture: ComponentFixture<ImgDropdownSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImgDropdownSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImgDropdownSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
