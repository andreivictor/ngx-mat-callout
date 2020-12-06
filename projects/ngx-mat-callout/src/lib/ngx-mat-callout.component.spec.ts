import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxMatCalloutComponent } from './ngx-mat-callout.component';

describe('NgxMatCalloutComponent', () => {
  let component: NgxMatCalloutComponent;
  let fixture: ComponentFixture<NgxMatCalloutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxMatCalloutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxMatCalloutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
