import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayingDataHandlingEventsComponent } from './displaying-data-handling-events.component';

describe('DisplayingDataHandlingEventsComponent', () => {
  let component: DisplayingDataHandlingEventsComponent;
  let fixture: ComponentFixture<DisplayingDataHandlingEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayingDataHandlingEventsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayingDataHandlingEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
