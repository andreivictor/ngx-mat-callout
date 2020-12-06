import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Theme } from '../../interfaces';
import { ThemeService, StyleManagerService } from '../../services';

@Component({
  selector: 'app-theme-picker',
  templateUrl: './theme-picker.component.html',
  styleUrls: ['./theme-picker.component.scss']
})
export class ThemePickerComponent implements OnInit {
  currentTheme: Theme;
  themes: Theme[];

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private themeService: ThemeService,
    private styleManagerService: StyleManagerService
  ) {
  }

  ngOnInit(): void {
    const storedThemeName = this.themeService.getStoredThemeName();

    this.themeService.getThemes().subscribe(response => {
      this.themes = response;

      if (storedThemeName) {
        this.selectTheme(storedThemeName);
      } else {
        this.currentTheme = this.themes.find(theme => theme.isDefault);
        this.document.body.classList.add(`mat-theme-${this.currentTheme.name}`);
      }
    });
  }

  selectTheme(themeName: string) {
    const theme = this.themes.find(currentTheme => currentTheme.name === themeName);

    if (!theme) {
      return;
    }

    this.currentTheme = theme;

    this.themeService.storeTheme(this.currentTheme);
    this.styleManagerService.setStyle('theme', `assets/${theme.name}.css`);

    const themeClass = new RegExp(/mat-theme-\S*/);
    if ( this.document.body.className.match(themeClass)) {
      this.document.body.className = document.body.className.replace(themeClass, '');
    }

    this.document.body.classList.add(`mat-theme-${theme.name}`);
  }

}
