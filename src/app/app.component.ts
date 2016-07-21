import { Component } from '@angular/core';
import { TrackingDirective } from './tracking.directive';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [TrackingDirective]
})
export class AppComponent {
  title = 'app works!';
}
