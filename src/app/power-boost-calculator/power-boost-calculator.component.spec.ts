import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PowerBoostCalculatorComponent } from './power-boost-calculator.component';

describe('PowerBoostCalculatorComponent', () => {
  let component: PowerBoostCalculatorComponent;
  let fixture: ComponentFixture<PowerBoostCalculatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PowerBoostCalculatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PowerBoostCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
