import { Injectable } from '@angular/core';

@Injectable()
export class TrackingService {

  constructor() {}

  public trackEvent(eventName: string) {
    // Tracking logic for event goes here.
    console.log(`event: ${eventName} has been tracked!`);
  }

}
