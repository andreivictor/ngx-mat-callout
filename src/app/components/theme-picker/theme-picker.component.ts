import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Theme } from '../../interfaces';
import { ThemeService } from '../../services';

@Component({
  selector: 'app-theme-picker',
  templateUrl: './theme-picker.component.html',
  styleUrls: ['./theme-picker.component.scss']
})
export class ThemePickerComponent implements OnInit, OnDestroy {
  currentTheme: Theme;
  themes: Theme[];

  private subscription: Subscription = new Subscription();

  constructor(
    private themeService: ThemeService
  ) {
  }

  ngOnInit(): void {
    this.subscription.add(
      this.themeService.currentTheme$.subscribe(theme => {
        this.currentTheme = theme;
      })
    );

    this.subscription.add(
      this.themeService.themes$.subscribe(themes => {
        this.themes = themes;
      })
    );
  }

  selectTheme(themeName: string): void {
    this.themeService.selectTheme(themeName);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
