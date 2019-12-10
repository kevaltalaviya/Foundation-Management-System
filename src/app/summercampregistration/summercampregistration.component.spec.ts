import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SummercampregistrationComponent } from './summercampregistration.component';

describe('SummercampregistrationComponent', () => {
  let component: SummercampregistrationComponent;
  let fixture: ComponentFixture<SummercampregistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SummercampregistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SummercampregistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
