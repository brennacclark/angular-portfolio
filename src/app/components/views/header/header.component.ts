import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../../../services/theme.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  theme: string = 'theme-light';

  // Inject the ThemeService into the constructor
  constructor(private themeService: ThemeService) {}

  // Initialize the component when it is first loaded
  // Subscribe to changes in the theme from the ThemeService
  ngOnInit(): void {
    this.themeService.getTheme().subscribe((currentTheme) => {
      this.theme = currentTheme;
    });
  }

  // Function to set the theme and log the change
  setTheme(newTheme: string) {
    this.themeService.setTheme(newTheme);
  }

  // Helper function to check if a theme is active
  isThemeActive(themeName: string): boolean {
    return this.theme === themeName;
  }
}
