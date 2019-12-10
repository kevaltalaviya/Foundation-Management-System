import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminaddeventsComponent } from './adminaddevents.component';

describe('AdminaddeventsComponent', () => {
  let component: AdminaddeventsComponent;
  let fixture: ComponentFixture<AdminaddeventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminaddeventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminaddeventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
