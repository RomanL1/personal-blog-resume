import {Component, Input, OnInit, signal, WritableSignal} from '@angular/core';

@Component({
  selector: 'app-title',
  standalone: true,
  imports: [],
  templateUrl: './title.component.html'
})
export class TitleComponent implements OnInit {
  @Input() smallLineSep: boolean = false;
  classes: WritableSignal<string> = signal('md:text-4xl text-3xl font-bold text-gray-900 dark:text-white animHidden')

  ngOnInit(): void {
    if (this.smallLineSep) {
      this.classes.update( value => value + ' mb-2');
    } else {
      this.classes.update( value => value + ' mb-8');
    }
  }
}
