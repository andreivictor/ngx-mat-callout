import { Component } from '@angular/core';
import { VERSION } from '@angular/core';
import { VERSION as AngularMaterialVersion } from '@angular/material/core';
import { Router, NavigationEnd } from '@angular/router';
import { environment } from '../environments/environment';

// declare gives Angular app access to ga function
// tslint:disable-next-line:ban-types
declare let gtag: Function;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Ngx Mat Callout';
  appVersion: string = environment.appVersion;
  angularVersion: string = VERSION.full;
  angularMaterialVersion: string = AngularMaterialVersion.full;

  constructor(public router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        console.log('NavigationEnd: ', event.urlAfterRedirects);
        gtag('config', environment.gaMeasurementId, {page_path: event.urlAfterRedirects});
      }
    });
  }
}
