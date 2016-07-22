/* tslint:disable:no-unused-variable */
import { Component } from '@angular/core';
import { inject, addProviders } from '@angular/core/testing';
import { TestComponentBuilder } from '@angular/compiler/testing';
import { By } from '@angular/platform-browser';
import { TrackingDirective } from './tracking.directive';
import { TrackingService } from './tracking.service';

// do not extend the TrackingService. If there are other
// dependencies this would be difficult or impossible.
class MockTrackingService {
  public eventCount = 0;

  public trackEvent(eventName: string) {
    this.eventCount++;
  }
}

let mockService = new MockTrackingService();

beforeEach(() => {
  addProviders([{provide: TrackingService, useValue: mockService}]);
});

describe('TrackingDirective', () => {
  let builder: TestComponentBuilder;
  let mockTrackingService: MockTrackingService;

  beforeEach(inject([TestComponentBuilder, TrackingService],
    (tcb: TestComponentBuilder, ts: TrackingService) => {

      builder = tcb;
      // we need to cast to MockTrackingService because
      // TrackingService has no eventCount property and we need it
      mockTrackingService = <MockTrackingService> ts;

    }));

  // General button tests
  it('should apply class based on color attribute', (done: () => void) => {

    builder
      .overrideProviders(TrackingDirective, [{provide: TrackingService, useValue: mockService}])
      .createAsync(TestApp).then(fixture => {

      let testComponent = fixture.debugElement.componentInstance;
      let buttonDebugElement = fixture.debugElement.query(By.css('button'));

      buttonDebugElement.nativeElement.click();

      expect(mockTrackingService.eventCount).toBe(1);

      done();
    });
  });
});

@Component({
  selector: 'test',
  template: `<button tracking="some button"></button>`,
  directives: [TrackingDirective]
})
class TestApp {
}
