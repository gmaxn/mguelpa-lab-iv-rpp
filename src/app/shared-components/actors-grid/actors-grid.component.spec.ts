import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActorsGridComponent } from './actors-grid.component';

describe('ActorsGridComponent', () => {
  let component: ActorsGridComponent;
  let fixture: ComponentFixture<ActorsGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActorsGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActorsGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
