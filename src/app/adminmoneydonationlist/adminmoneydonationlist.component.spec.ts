import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminmoneydonationlistComponent } from './adminmoneydonationlist.component';

describe('AdminmoneydonationlistComponent', () => {
  let component: AdminmoneydonationlistComponent;
  let fixture: ComponentFixture<AdminmoneydonationlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminmoneydonationlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminmoneydonationlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
