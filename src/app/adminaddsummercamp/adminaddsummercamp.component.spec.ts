import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminaddsummercampComponent } from './adminaddsummercamp.component';

describe('AdminaddsummercampComponent', () => {
  let component: AdminaddsummercampComponent;
  let fixture: ComponentFixture<AdminaddsummercampComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminaddsummercampComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminaddsummercampComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
