import { Injectable } from '@angular/core';

/**
 * Class for managing stylesheets. Stylesheets are loaded into named slots so that they can be
 * removed or changed later.
 *
 * Copied from https://github.com/angular/material.angular.io/blob/master/src/app/shared/style-manager/style-manager.ts
 */
@Injectable({
  providedIn: 'root'
})
export class StyleManagerService {

  private static getClassNameForKey(key: string): string {
    return `style-manager-${key}`;
  }

  private static getExistingLinkElementByKey(key): HTMLElement {
    return document.head.querySelector(`link[rel="stylesheet"].${StyleManagerService.getClassNameForKey(key)}`);
  }
  /**
   * Set the stylesheet with the specified key.
   */
  setStyle(key: string, href: string): Promise<void> {
    const existingLinkElement = StyleManagerService.getExistingLinkElementByKey(key);
    return new Promise((resolve) => {
      const linkElement = document.createElement('link');
      linkElement.setAttribute('type', 'text/css');
      linkElement.setAttribute('rel', 'stylesheet');
      linkElement.classList.add(StyleManagerService.getClassNameForKey(key));
      linkElement.onload = () => {
        // remove old element if exists
        if (existingLinkElement) {
          document.head.removeChild(existingLinkElement);
        }

        resolve();
      };
      linkElement.setAttribute('href', href);
      document.head.appendChild(linkElement);
    });
  }

  /**
   * Remove the stylesheet with the specified key.
   */
  removeStyle(key: string) {
    const existingLinkElement = StyleManagerService.getExistingLinkElementByKey(key);
    if (existingLinkElement) {
      document.head.removeChild(existingLinkElement);
    }
  }
}

