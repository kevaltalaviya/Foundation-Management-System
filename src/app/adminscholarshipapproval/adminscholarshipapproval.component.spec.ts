import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminscholarshipapprovalComponent } from './adminscholarshipapproval.component';

describe('AdminscholarshipapprovalComponent', () => {
  let component: AdminscholarshipapprovalComponent;
  let fixture: ComponentFixture<AdminscholarshipapprovalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminscholarshipapprovalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminscholarshipapprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
