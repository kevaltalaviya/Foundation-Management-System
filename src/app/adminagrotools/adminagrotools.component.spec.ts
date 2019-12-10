import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminagrotoolsComponent } from './adminagrotools.component';

describe('AdminagrotoolsComponent', () => {
  let component: AdminagrotoolsComponent;
  let fixture: ComponentFixture<AdminagrotoolsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminagrotoolsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminagrotoolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
