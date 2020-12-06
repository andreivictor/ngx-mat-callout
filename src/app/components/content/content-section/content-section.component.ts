import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-content-section',
  templateUrl: './content-section.component.html',
  styleUrls: ['./content-section.component.scss']
})
export class ContentSectionComponent {
  /** The id of the section. */
  @Input() sectionId: string;

  /** The title of the section. */
  @Input() sectionTitle: string;

  /** Include section url */
  @Input() hasSectionUrl: boolean = true;

  /** Base URL that is used to build an absolute fragment URL. */
  private baseUrl: string;

  constructor(router: Router) {
    this.baseUrl = router.url.split('#')[0];
  }

  /**
   * Handles normalizing
   * the anchor jump tags with the current route url.
   *
   * For example:
   *
   *    <a href="#foo">Foo</a>
   *
   * would result in the wrong url, this component
   * combines the current route with that jump link:
   *
   *    <a href="/guide#foo">Foo</a>
   */
  getSectionUrl(): string {
    return `${this.baseUrl}#${this.sectionId}`;
  }

}
