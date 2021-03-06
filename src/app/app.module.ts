import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSnackBarModule, MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material/snack-bar';

import { NgxMatCalloutModule } from 'ngx-mat-callout';

import { AppRoutingModule } from './app-routing.module';

import { ThemeService } from './services';

import { AppComponent } from './app.component';

// Components - Pages
import {
  PageOverviewComponent
} from './components/pages';

// Components - Content
import {
  ContentSectionComponent,
  ContentExampleViewerComponent,
  ContentCodeSnippetComponent
} from './components/content';

// Components - Examples
import {
  ExampleOverviewComponent,
  ExampleCustomHeadingComponent,
  ExampleNoHeadingComponent,
  ExampleOverviewBasicComponent
} from './components/examples';

// Components - ThemePicker
import { ThemePickerComponent } from './components';

// Directives
import { HighlightJsDirective } from './directives';

@NgModule({
  declarations: [
    AppComponent,
    ThemePickerComponent,
    PageOverviewComponent,
    ContentSectionComponent,
    ContentExampleViewerComponent,
    ContentCodeSnippetComponent,
    ExampleOverviewComponent,
    ExampleNoHeadingComponent,
    ExampleCustomHeadingComponent,
    ExampleOverviewBasicComponent,
    HighlightJsDirective,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatTooltipModule,
    MatMenuModule,
    MatIconModule,
    MatDividerModule,
    MatTabsModule,
    MatSnackBarModule,
    NgxMatCalloutModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: (themeService: ThemeService) => () => themeService.initialize(),
      deps: [ThemeService],
      multi: true
    },
    {
      provide: MAT_SNACK_BAR_DEFAULT_OPTIONS,
      useValue: {horizontalPosition: 'center'}
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
