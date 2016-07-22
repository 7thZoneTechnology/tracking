/* tslint:disable:no-unused-variable */
import { inject, addProviders } from '@angular/core/testing';
import { TestComponentBuilder } from '@angular/compiler/testing';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { TrackingDirective } from './tracking.directive';
import { TrackingService } from './tracking.service';

class MockTrackingService extends TrackingService {
  public eventCount = 0;

  public trackEvent(eventName: string) {
    this.eventCount++;
  }
}

describe('TrackingDirective', () => {
  let builder: TestComponentBuilder;
  let mockTrackingService: MockTrackingService;
  let trackingDirective: TrackingDirective;

  beforeEach(() => {
    mockTrackingService = new MockTrackingService();
    trackingDirective = new TrackingDirective(mockTrackingService);
    addProviders([
      {provide: TrackingDirective, use: trackingDirective}
    ]);
  });

  beforeEach(inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {
    builder = tcb;
  }));

  // General button tests
  it('should apply class based on color attribute', (done: () => void) => {
    return builder.createAsync(TestApp).then(fixture => {
      let testComponent = fixture.debugElement.componentInstance;
      let buttonDebugElement = fixture.debugElement.query(By.css('button'));

      buttonDebugElement.nativeElement.click();
      expect(buttonDebugElement).toBeTruthy();
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
