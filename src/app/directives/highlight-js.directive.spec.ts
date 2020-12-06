import { ElementRef } from '@angular/core';
import { HighlightJsDirective } from './highlight-js.directive';

class MockElementRef implements ElementRef {
  nativeElement = {};
}

describe('HighlightJsDirective', () => {
  it('should create an instance', () => {
    const mockElementRef = new MockElementRef();
    const directive = new HighlightJsDirective(mockElementRef);
    expect(directive).toBeTruthy();
  });
});
