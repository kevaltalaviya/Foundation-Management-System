import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmingetagrotoolComponent } from './admingetagrotool.component';

describe('AdmingetagrotoolComponent', () => {
  let component: AdmingetagrotoolComponent;
  let fixture: ComponentFixture<AdmingetagrotoolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmingetagrotoolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmingetagrotoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
