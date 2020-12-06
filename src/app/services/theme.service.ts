import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Theme } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  static storageKey = 'theme-name';

  constructor(
    private http: HttpClient
  ) { }

  getThemes(): Observable<Theme[]> {
    return this.http.get<Theme[]>('assets/themes.json');
  }

  storeTheme(theme: Theme): void {
    try {
      window.localStorage[ThemeService.storageKey] = theme.name;
    } catch { }
  }

  getStoredThemeName(): string | null {
    try {
      return window.localStorage[ThemeService.storageKey] || null;
    } catch {
      return null;
    }
  }

  clearStorage() {
    try {
      window.localStorage.removeItem(ThemeService.storageKey);
    } catch { }
  }

}
