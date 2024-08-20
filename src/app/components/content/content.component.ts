import {Component, Input, OnInit} from '@angular/core';
import {TitleComponent} from "../title/title.component";

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [
    TitleComponent
  ],
  templateUrl: './content.component.html'
})
export class ContentComponent {
 @Input() title: string = '';
}
