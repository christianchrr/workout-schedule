import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCompleteWorkoutFormComponent } from './add-complete-workout-form.component';

describe('AddCompleteWorkoutFormComponent', () => {
  let component: AddCompleteWorkoutFormComponent;
  let fixture: ComponentFixture<AddCompleteWorkoutFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCompleteWorkoutFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCompleteWorkoutFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
