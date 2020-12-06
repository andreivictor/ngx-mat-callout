import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleOverviewBasicComponent } from './example-overview-basic.component';

describe('ExampleOverviewBasicComponent', () => {
  let component: ExampleOverviewBasicComponent;
  let fixture: ComponentFixture<ExampleOverviewBasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExampleOverviewBasicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleOverviewBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
