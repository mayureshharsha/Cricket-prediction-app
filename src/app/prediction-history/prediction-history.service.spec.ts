import { TestBed } from '@angular/core/testing';

import { PredictionHistoryService } from './prediction-history.service';

describe('PredictionHistoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PredictionHistoryService = TestBed.get(PredictionHistoryService);
    expect(service).toBeTruthy();
  });
});
