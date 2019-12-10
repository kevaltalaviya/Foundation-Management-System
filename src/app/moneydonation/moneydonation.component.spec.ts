import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoneydonationComponent } from './moneydonation.component';

describe('MoneydonationComponent', () => {
  let component: MoneydonationComponent;
  let fixture: ComponentFixture<MoneydonationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoneydonationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoneydonationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
