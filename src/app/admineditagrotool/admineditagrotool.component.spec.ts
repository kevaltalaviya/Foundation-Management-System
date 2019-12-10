import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmineditagrotoolComponent } from './admineditagrotool.component';

describe('AdmineditagrotoolComponent', () => {
  let component: AdmineditagrotoolComponent;
  let fixture: ComponentFixture<AdmineditagrotoolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmineditagrotoolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmineditagrotoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
