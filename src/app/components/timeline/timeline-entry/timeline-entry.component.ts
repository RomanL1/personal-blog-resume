import {Component, Input} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-timeline-entry',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './timeline-entry.component.html',
})
export class TimelineEntryComponent {
  @Input() timeSpan: string = '';
  @Input() title: string = '';
  @Input() jobTitle: string = '';
  @Input() description: string = '';
  @Input() imageSrc: string = '';
  @Input() imageLink: string = '';
  @Input() imageAlt: string = '';
}
