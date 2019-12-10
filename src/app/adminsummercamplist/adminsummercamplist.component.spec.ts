import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminsummercamplistComponent } from './adminsummercamplist.component';

describe('AdminsummercamplistComponent', () => {
  let component: AdminsummercamplistComponent;
  let fixture: ComponentFixture<AdminsummercamplistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminsummercamplistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminsummercamplistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
