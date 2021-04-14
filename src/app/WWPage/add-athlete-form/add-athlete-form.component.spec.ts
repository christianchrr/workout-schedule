import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAthleteFormComponent } from './add-athlete-form.component';

describe('AddAthleteFormComponent', () => {
  let component: AddAthleteFormComponent;
  let fixture: ComponentFixture<AddAthleteFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAthleteFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAthleteFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
