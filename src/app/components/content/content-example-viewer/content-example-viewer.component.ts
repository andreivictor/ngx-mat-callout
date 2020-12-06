import { Component, Inject, Input, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { forkJoin, Observable } from 'rxjs';
import { FileLoaderService } from '../../../services';

type tabLabel = 'HTML' | 'TS' |'SCSS';
type fileExtension = 'html' | 'ts' | 'scss';

@Component({
  selector: 'app-content-example-viewer',
  templateUrl: './content-example-viewer.component.html',
  styleUrls: ['./content-example-viewer.component.scss']
})
export class ContentExampleViewerComponent implements OnInit {
  /** The associations between labels and extensions. */
  labelExtensionAssociations: {label: tabLabel, extension: fileExtension}[] = [
    {
      label: 'HTML',
      extension: 'html'
    },
    {
      label: 'TS',
      extension: 'ts'
    },
    {
      label: 'SCSS',
      extension: 'scss'
    }
  ];

  /** Example tabs and their content that should be displayed in the view-source tab. */
  tabs: {label: tabLabel, content: string, extension: fileExtension}[] = [];

  /** View of the example component. */
  view: 'demo' | 'full' = 'demo';

  /** Title of the example component. */
  @Input() title: string;

  /** Internal name of the example component. */
  @Input() internalName: string;

  /** StackBlitz ID of the example component. */
  @Input() stackBlitzId: string;

  /** Whether to display source-view or not */
  @Input() hasSourceView: boolean = false;

  constructor(
    private fileLoaderService: FileLoaderService,
    @Inject(DOCUMENT) private document: Document
  ) { }

  ngOnInit(): void {
    this._generateTabs();
  }

  toggleSourceView(): void {
    this.view === 'full' ? this.view = 'demo' : this.view = 'full';
  }

  openStackBlitz(): void {
    const link = this.document.createElement('a');
    link.target = '_blank';
    link.href = `https://stackblitz.com/edit/${this.stackBlitzId}`;
    link.click();
    link.remove();
  }

  private _generateTabs(): void {
    const basePath = `examples-source/example-${this.internalName}`;
    const baseFileName = `example-${this.internalName}.component`;
    const observableArray: Observable<string>[] = [];

    this.labelExtensionAssociations.forEach(association => {
      observableArray.push(
        this.fileLoaderService.getFile(`${basePath}/${baseFileName}.${association.extension}`)
      );
    });

    forkJoin(observableArray).subscribe(response => {
      if (response && response.length) {
        response.forEach((responseContent, i) => {
          if (responseContent) {
            this.tabs.push({
              label: this.labelExtensionAssociations[i].label,
              content: responseContent,
              extension: this.labelExtensionAssociations[i].extension
            });
          }
        });
      }
    });
  }

}
