import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { ContentCodeSnippetComponent } from './content-code-snippet.component';

describe('ContentCodeSnippetComponent', () => {
  let component: ContentCodeSnippetComponent;
  let fixture: ComponentFixture<ContentCodeSnippetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ MatSnackBarModule ],
      declarations: [ ContentCodeSnippetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentCodeSnippetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
