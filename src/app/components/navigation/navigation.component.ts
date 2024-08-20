import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive} from "@angular/router";
import {DarkModeToggleComponent} from "../dark-mode-toggle/dark-mode-toggle.component";

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [
    RouterLink,
    DarkModeToggleComponent,
    RouterLinkActive
  ],
  templateUrl: './navigation.component.html',
})
export class NavigationComponent {
  navItems = [
    { path: '/', label: 'About Me' },
    // { path: '/projects', label: 'Projects' },
    // { path: '/contact', label: 'Contact' }
  ];
}
