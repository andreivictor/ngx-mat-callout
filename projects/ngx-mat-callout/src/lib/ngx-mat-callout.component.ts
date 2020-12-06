import { Component, ContentChild, ElementRef, HostBinding, Input, ViewEncapsulation } from '@angular/core';
import { CanColor, CanColorCtor, mixinColor, ThemePalette } from '@angular/material/core';
import { NgxMatCalloutHeadingDirective } from './ngx-mat-callout-heading.directive';

// Boilerplate for applying mixins to MatCallout.
class NgxMatCalloutBase {
  constructor(public _elementRef: ElementRef) {}
}
const _NgxMatCalloutMixinBase: CanColorCtor & typeof NgxMatCalloutBase = mixinColor(NgxMatCalloutBase);

@Component({
  selector: 'ngx-mat-callout',
  templateUrl: 'ngx-mat-callout.component.html',
  styleUrls: ['ngx-mat-callout.component.scss'],
  encapsulation: ViewEncapsulation.None,
})

export class NgxMatCalloutComponent extends _NgxMatCalloutMixinBase implements CanColor {
  @HostBinding('class') className = 'ngx-mat-callout';

  /** Theme color for callout . */
  @Input() color: ThemePalette;

  /** Plain text heading for the callout, used when there is no template heading. */
  @Input('heading') headingText: string = '';

  /** Content for the heading given by `<ng-template ngxMatCalloutHeading>`. */
  @ContentChild(NgxMatCalloutHeadingDirective) headingTemplate: NgxMatCalloutHeadingDirective;

  constructor(
    elementRef: ElementRef
  ) {
    super(elementRef);
  }

}
