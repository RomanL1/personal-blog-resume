import {Component, Input, OnInit, signal, WritableSignal} from '@angular/core';

@Component({
  selector: 'app-card-entry',
  standalone: true,
  imports: [],
  templateUrl: './card-entry.component.html',
})
export class CardEntryComponent implements OnInit {
  @Input() title: string = '';
  @Input() colorClass: string = '';
  @Input() path: string = '';

  classes: WritableSignal<string> = signal('h-6 w-6 mr-2');

  ngOnInit(): void {
    if (this.colorClass) {
      this.classes.update(value => value + ' ' + this.colorClass);
    }
  }
}
