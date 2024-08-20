import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {DarkModeToggleComponent} from "./components/dark-mode-toggle/dark-mode-toggle.component";
import {NavigationComponent} from "./components/navigation/navigation.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DarkModeToggleComponent, NavigationComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'Roman Lysser | Portfolio';
}
