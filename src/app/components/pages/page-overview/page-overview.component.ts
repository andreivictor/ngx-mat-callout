import { Component, OnInit } from '@angular/core';
import { FileLoaderService } from '../../../services';

@Component({
  selector: 'app-page-overview',
  templateUrl: './page-overview.component.html',
  styleUrls: ['./page-overview.component.scss']
})
export class PageOverviewComponent implements OnInit {
  installationCode: string = 'npm install ngx-mat-callout --save';

  basicUsageComponentCode: string;
  basicUsageComponentFilePath: string = 'examples-source/example-overview-basic/example-overview-basic.component.html';

  basicUsageModuleCode: string = 'import { NgxMatCalloutModule } from \'ngx-mat-callout\';\n' +
    '\n' +
    '@NgModule({\n' +
    '  imports: [\n' +
    '    // ..\n' +
    '    NgxMatCalloutModule\n' +
    '  ],\n' +
    '\n' +
    '})\n' +
    'export class AppModule {}';

  calloutHeadingInputCode: string = '<ngx-mat-callout color="primary" heading="Primary callout heading">\n' +
    '  ...\n' +
    '</ngx-mat-callout>';

  calloutHeadingDirectiveCode: string = '<ngx-mat-callout color="primary">\n' +
    '  <ng-template ngxMatCalloutHeading>\n' +
    '    <h1>\n' +
    '      <mat-icon>thumb_up</mat-icon>\n' +
    '      Primary <em>Heading </em> <u>with</u> <b> HTML</b>\n' +
    '    </h1>\n' +
    '  </ng-template>\n' +
    '  ...\n' +
    '</ngx-mat-callout>';

  constructor(
    private fileLoaderService: FileLoaderService
  ) { }

  ngOnInit(): void {
    this.fileLoaderService.getFile(this.basicUsageComponentFilePath)
      .subscribe(response => {
        this.basicUsageComponentCode = response;
      });
  }

}
