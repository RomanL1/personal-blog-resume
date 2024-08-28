import {Component, OnInit, Inject, PLATFORM_ID} from '@angular/core';
import {isPlatformBrowser} from '@angular/common';

@Component({
  selector: 'app-dark-mode-toggle',
  standalone: true,
  imports: [],
  templateUrl: './dark-mode-toggle.component.html',
})
export class DarkModeToggleComponent {
  public readonly stringKey = 'theme'
  isDarkMode: boolean = false;
  isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
    if (this.isBrowser) {
      this.initializeTheme();
    }
  }

  private initializeTheme() {
    const savedTheme = localStorage.getItem(this.stringKey);
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
    if (!this.isBrowser) {
      return
    }
    if (this.isDarkMode) {
      localStorage.setItem(this.stringKey, 'dark');
      document.documentElement.dataset[this.stringKey] = 'dark';
    } else {
      localStorage.setItem(this.stringKey, 'light');
      document.documentElement.dataset[this.stringKey] = 'light';
    }
  }
}
