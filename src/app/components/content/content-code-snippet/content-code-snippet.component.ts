import { Component, Input } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Clipboard } from '@angular/cdk/clipboard';

@Component({
  selector: 'app-content-code-snippet',
  templateUrl: './content-code-snippet.component.html',
  styleUrls: ['./content-code-snippet.component.scss']
})
export class ContentCodeSnippetComponent {
  /** Language of the code. */
  @Input() language: string;

  /** Content. */
  @Input() content: string;

  /** Has Border. */
  @Input() hasBorder: boolean = true;

  constructor(
    private snackbar: MatSnackBar,
    private clipboard: Clipboard
  ) { }

  copySource(content: string): void {
    if (this.clipboard.copy(content)) {
      this.snackbar.open('Code copied', '', {duration: 2500});
    } else {
      this.snackbar.open('Copy failed. Please try again!', '', {duration: 2500});
    }
  }

}
