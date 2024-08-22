import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-social-buttons',
  standalone: true,
  imports: [],
  templateUrl: './social-buttons.component.html'
})
export class SocialButtonsComponent {
  @Input() small: boolean = true;
}
