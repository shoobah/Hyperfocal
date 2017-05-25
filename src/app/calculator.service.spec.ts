import { TestBed, inject } from '@angular/core/testing';

import { CalculatorService } from './calculator.service';

describe('CalculatorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CalculatorService]
    });
  });

  it('should be created', inject([CalculatorService], (service: CalculatorService) => {
    expect(service).toBeTruthy();
  }));

  it('should calculate hyperfocal distance to nearest mm', inject([CalculatorService], (service: CalculatorService) => {
    expect(service.calculate(50, 8, 0.03)).toBe(Math.round(31400 / 3), 'Failed to calculate focal distance');
  }));
});
