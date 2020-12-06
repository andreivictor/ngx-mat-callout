import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[ngxMatCalloutHeading]'
})
export class NgxMatCalloutHeadingDirective {

  constructor(public template: TemplateRef<any>) { }

}
