import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../../../services/theme.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './About.component.html',
  styleUrl: './About.component.scss',
})
export class AboutComponent implements OnInit {
  theme: string = 'theme=light';

  // Inject the ThemeService into the constructor
  constructor(private themeService: ThemeService) {}

  // Initialize the component when it is first loaded
  // Subscribe to changes in the theme from the ThemeService
  ngOnInit(): void {
    this.themeService.getTheme().subscribe((currentTheme) => {
      this.theme = currentTheme;
    });
  }
}
