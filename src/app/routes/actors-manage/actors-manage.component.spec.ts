import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActorsManageComponent } from './actors-manage.component';

describe('ActorsManageComponent', () => {
  let component: ActorsManageComponent;
  let fixture: ComponentFixture<ActorsManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActorsManageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActorsManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
