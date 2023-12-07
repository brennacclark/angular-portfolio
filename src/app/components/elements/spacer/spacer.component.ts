import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../../../services/theme.service';

@Component({
  selector: 'app-spacer',
  standalone: true,
  imports: [],
  templateUrl: './spacer.component.html',
  styleUrl: './spacer.component.scss',
})
export class SpacerComponent implements OnInit {
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
