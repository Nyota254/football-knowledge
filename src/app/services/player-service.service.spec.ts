import { TestBed } from '@angular/core/testing';

import { PlayerServiceService } from './player-service.service';

describe('PlayerServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PlayerServiceService = TestBed.get(PlayerServiceService);
    expect(service).toBeTruthy();
  });
});
