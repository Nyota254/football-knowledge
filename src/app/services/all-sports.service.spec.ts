import { TestBed } from '@angular/core/testing';

import { AllSportsService } from './all-sports.service';

describe('AllSportsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AllSportsService = TestBed.get(AllSportsService);
    expect(service).toBeTruthy();
  });
});
