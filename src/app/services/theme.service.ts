import { Inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { mergeMap, tap } from 'rxjs/operators';
import { StyleManagerService } from './style-manager.service';
import { Theme } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  constructor(
    private http: HttpClient,
    private styleManagerService: StyleManagerService,
    @Inject(DOCUMENT) private document: Document,
  ) { }
  static storageKey = 'theme-name';

  private currentTheme: BehaviorSubject<Theme> = new BehaviorSubject<Theme>(null);
  private themes: BehaviorSubject<Theme[]> = new BehaviorSubject<Theme[]>([]);

  public currentTheme$: Observable<Theme> = this.currentTheme.asObservable();
  public themes$: Observable<Theme[]> = this.themes.asObservable();

  private static saveToLocalStorage(theme: Theme): void {
    try {
      window.localStorage[ThemeService.storageKey] = theme.name;
    } catch { }
  }

  private static getFromLocalStorage(): string | null {
    try {
      return window.localStorage[ThemeService.storageKey] || null;
    } catch {
      return null;
    }
  }

  private static clearLocalStorage(): void {
    try {
      window.localStorage.removeItem(ThemeService.storageKey);
    } catch { }
  }

  initialize(): Promise<void> {
    const storedThemeName = ThemeService.getFromLocalStorage();

    return this.getThemes()
      .pipe(
        mergeMap((themes) => {
          this.themes.next(themes);

          if (storedThemeName) {
            return this.selectTheme(storedThemeName);
          } else {
            return this.selectTheme(null, true);
          }
        })
      )
      .toPromise();
  }

  getThemes(): Observable<Theme[]> {
    return this.http
      .get<Theme[]>('assets/themes.json')
      .pipe(
        tap(themes =>
          this.themes.next(themes)
        )
      );
  }

  async selectTheme(themeName: string, isDefault?: boolean): Promise<void> {
    let selectedTheme: Theme;

    if (isDefault) {
      selectedTheme = this.themes.getValue().find(theme => theme.isDefault) || this.themes.getValue()[0];
    } else {
      selectedTheme = this.themes.getValue().find(theme => theme.name === themeName);

      if (!selectedTheme) {
        return;
      }
    }

    this.currentTheme.next(selectedTheme);

    if (!isDefault) {
      ThemeService.saveToLocalStorage(selectedTheme);
    }

    await this.styleManagerService.setStyle('theme', `assets/themes/${selectedTheme.name}.css`);

    const themeClass = new RegExp(/mat-theme-\S*/);
    if (this.document.body.className.match(themeClass)) {
      this.document.body.className = document.body.className.replace(themeClass, '');
    }
    this.document.body.classList.add(`mat-theme-${selectedTheme.name}`);
  }

}
