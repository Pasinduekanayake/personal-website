import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciseTitlecaseComponent } from './exercise-titlecase.component';

describe('ExerciseTitlecaseComponent', () => {
  let component: ExerciseTitlecaseComponent;
  let fixture: ComponentFixture<ExerciseTitlecaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExerciseTitlecaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExerciseTitlecaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
