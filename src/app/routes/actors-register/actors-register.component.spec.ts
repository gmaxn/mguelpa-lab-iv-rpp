import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActorsRegisterComponent } from './actors-register.component';

describe('ActorsRegisterComponent', () => {
  let component: ActorsRegisterComponent;
  let fixture: ComponentFixture<ActorsRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActorsRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActorsRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
