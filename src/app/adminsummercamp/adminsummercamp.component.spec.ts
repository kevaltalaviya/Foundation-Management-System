import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminsummercampComponent } from './adminsummercamp.component';

describe('AdminsummercampComponent', () => {
  let component: AdminsummercampComponent;
  let fixture: ComponentFixture<AdminsummercampComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminsummercampComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminsummercampComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
