import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private theme = new BehaviorSubject<string>('theme-light');

  // Load the initial theme from local storage or use the default 'theme-light'
  loadInitialTheme() {
    const storedTheme = localStorage.getItem('theme-color') || 'theme-light';
    this.theme.next(storedTheme);
  }

  // Get the current theme as an observable
  getTheme() {
    return this.theme.asObservable();
  }

  // Set and store the new theme, updating the theme observable and local storage
  setTheme(newTheme: string) {
    this.theme.next(newTheme);
    localStorage.setItem('theme-color', newTheme);
  }
}
