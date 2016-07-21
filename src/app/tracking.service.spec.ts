/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { TrackingService } from './tracking.service';

describe('Tracking Service', () => {
  beforeEachProviders(() => [TrackingService]);

  it('should ...',
      inject([TrackingService], (service: TrackingService) => {
    expect(service).toBeTruthy();
  }));
});
