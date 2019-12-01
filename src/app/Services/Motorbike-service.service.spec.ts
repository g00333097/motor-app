import { TestBed } from '@angular/core/testing';

import { MotorbikeServiceService } from './motorbike-service.service';

describe('MotorbikeServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MotorbikeServiceService = TestBed.get(MotorbikeServiceService);
    expect(service).toBeTruthy();
  });
});
