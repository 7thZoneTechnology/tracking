import { Directive, HostListener, Input } from '@angular/core';
import { TrackingService } from './tracking.service';

@Directive({
  selector: '[tracking]',
  providers: [
    TrackingService
  ]
})
export class TrackingDirective {

  @Input() tracking: string;

  constructor(private trackingService: TrackingService) {
  }

  @HostListener('click', ['$event.target'])
  onClick(element) {
    this.trackingService.trackEvent(this.tracking);
  }
}
