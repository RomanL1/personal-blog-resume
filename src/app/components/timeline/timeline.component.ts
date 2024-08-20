import {Component} from '@angular/core';
import {TimelineEntryComponent} from "./timeline-entry/timeline-entry.component";

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [
    TimelineEntryComponent
  ],
  templateUrl: './timeline.component.html',
})
export class TimelineComponent {

}
