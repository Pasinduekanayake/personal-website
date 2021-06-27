import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciseFavoriteComponentComponent } from './exercise-favorite-component.component';

describe('ExerciseFavoriteComponentComponent', () => {
  let component: ExerciseFavoriteComponentComponent;
  let fixture: ComponentFixture<ExerciseFavoriteComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExerciseFavoriteComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExerciseFavoriteComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
