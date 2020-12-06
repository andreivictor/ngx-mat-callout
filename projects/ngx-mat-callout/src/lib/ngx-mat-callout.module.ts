import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgxMatCalloutComponent } from './ngx-mat-callout.component';
import { NgxMatCalloutHeadingDirective } from './ngx-mat-callout-heading.directive';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule
  ],
  declarations: [
    NgxMatCalloutComponent,
    NgxMatCalloutHeadingDirective
  ],
  exports: [
    NgxMatCalloutComponent,
    NgxMatCalloutHeadingDirective
  ]
})
export class NgxMatCalloutModule { }
