/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { TrackingDirective } from './tracking.directive';
import { TrackingService } from './tracking.service';

class MockTrackingService extends TrackingService {
  public trackEvent(eventName: string) {

  }
}
describe('Tracking Directive', () => {
  it('should create an instance', () => {
    let mockTrackingService = new MockTrackingService();
    let directive = new TrackingDirective(mockTrackingService);
    expect(directive).toBeTruthy();
  });
});
