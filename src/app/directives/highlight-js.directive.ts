import { AfterViewInit, Directive, ElementRef } from '@angular/core';
import * as hljs from 'highlight.js';

@Directive({
  selector: '[appHighlightJs]'
})
export class HighlightJsDirective implements AfterViewInit {

  constructor(
    private elementRef: ElementRef
  ) {}

  ngAfterViewInit(): void {
    hljs.highlightBlock(this.elementRef.nativeElement);
  }

}
