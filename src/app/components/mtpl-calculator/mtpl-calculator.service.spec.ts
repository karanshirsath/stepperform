import { TestBed } from '@angular/core/testing';

import { MtplCalculatorService } from './mtpl-calculator.service';

describe('MtplCalculatorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MtplCalculatorService = TestBed.get(MtplCalculatorService);
    expect(service).toBeTruthy();
  });
});
