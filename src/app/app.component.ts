import { Component } from '@angular/core';
import { VERSION } from '@angular/core';
import { VERSION as AngularMaterialVersion } from '@angular/material/core';
import { environment } from '../environments/environment';

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
}
