import { TestBed } from '@angular/core/testing';

import { TeamServiceService } from './team-service.service';

describe('TeamServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TeamServiceService = TestBed.get(TeamServiceService);
    expect(service).toBeTruthy();
  });
});
