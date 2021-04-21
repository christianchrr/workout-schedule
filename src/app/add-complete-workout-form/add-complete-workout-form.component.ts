import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FileValidator } from 'ngx-material-file-input';
import { CompleteWorkout } from '../Models/complete-workout';

@Component({
  selector: 'app-add-complete-workout-form',
  templateUrl: './add-complete-workout-form.component.html',
  styleUrls: ['./add-complete-workout-form.component.css']
})
export class AddCompleteWorkoutFormComponent implements OnInit {
  [x: string]: any;

  // cworkout = new CompleteWorkout('','','','','')


  constructor() { }

  ngOnInit(): void {
  }

}
