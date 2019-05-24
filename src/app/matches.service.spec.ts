import { TestBed } from '@angular/core/testing';

import { MatchesService } from './cards/matches.service';

describe('MatchesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MatchesService = TestBed.get(MatchesService);
    expect(service).toBeTruthy();
  });
});
