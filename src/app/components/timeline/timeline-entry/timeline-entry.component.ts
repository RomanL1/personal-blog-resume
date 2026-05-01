import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-timeline-entry',
  standalone: true,
  imports: [],
  templateUrl: './timeline-entry.component.html',
})
export class TimelineEntryComponent {
  @Input() timeSpanFrom: string = '';
  @Input() timeSpanTo: string = '';
  @Input() title: string = '';
  @Input() jobTitle: string = '';
  @Input() description: string = '';
  @Input() imageSrc: string = '';
  @Input() imageLink: string = '';
  @Input() imageAlt: string = '';
  @Input() imageBgWhite: boolean = false;
}
