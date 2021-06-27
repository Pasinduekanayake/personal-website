import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgContentNgContainerComponent } from './ng-content-ng-container.component';

describe('NgContentNgContainerComponent', () => {
  let component: NgContentNgContainerComponent;
  let fixture: ComponentFixture<NgContentNgContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgContentNgContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgContentNgContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
