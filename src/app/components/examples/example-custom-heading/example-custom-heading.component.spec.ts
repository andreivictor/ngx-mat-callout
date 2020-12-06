import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleCustomHeadingComponent } from './example-custom-heading.component';

describe('ExampleCustomHeadingComponent', () => {
  let component: ExampleCustomHeadingComponent;
  let fixture: ComponentFixture<ExampleCustomHeadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExampleCustomHeadingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleCustomHeadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
