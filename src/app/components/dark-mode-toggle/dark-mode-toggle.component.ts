import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-dark-mode-toggle',
  standalone: true,
  imports: [],
  templateUrl: './dark-mode-toggle.component.html',
})
export class DarkModeToggleComponent {
  isDarkMode: boolean = false;
  isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
    if (this.isBrowser) {
      this.initializeTheme();
    }
  }

  private initializeTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      this.isDarkMode = true;
    } else if (savedTheme === 'light') {
      this.isDarkMode = false;
    } else {
      this.isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    this.updateTheme();
  }

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    this.updateTheme();
  }

  private updateTheme() {
    if (this.isBrowser) {
      document.documentElement.classList.remove('light', 'dark');
      const newTheme = this.isDarkMode ? 'dark' : 'light';
      document.documentElement.classList.add(newTheme);
      localStorage.setItem('theme', newTheme);
    }
  }
}
