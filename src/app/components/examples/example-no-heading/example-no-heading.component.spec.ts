import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleNoHeadingComponent } from './example-no-heading.component';

describe('ExampleNoHeadingComponent', () => {
  let component: ExampleNoHeadingComponent;
  let fixture: ComponentFixture<ExampleNoHeadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExampleNoHeadingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleNoHeadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
