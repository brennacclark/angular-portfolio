import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MainComponent } from './components/views/main/main.component';
import { HeaderComponent } from './components/views/header/header.component';
import { FooterComponent } from './components/views/footer/footer.component';

import { ThemeService } from './services/theme.service';
import { SpacerComponent } from './components/elements/spacer/spacer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    SpacerComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  theme: string = 'theme-light';
  title: any;

  // Inject the ThemeService into the constructor
  constructor(private themeService: ThemeService) {}

  // Initialize the component when it is first loaded
  // Load the initial theme from local storage or use the default
  // Subscribe to changes in the theme from the ThemeService
  ngOnInit(): void {
    this.themeService.loadInitialTheme();
    this.themeService.getTheme().subscribe((currentTheme) => {
      this.theme = currentTheme;
    });
  }
}
