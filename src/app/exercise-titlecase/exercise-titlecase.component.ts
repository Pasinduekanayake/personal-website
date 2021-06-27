import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercise-titlecase',
  templateUrl: './exercise-titlecase.component.html',
  styleUrls: ['./exercise-titlecase.component.css']
})
export class ExerciseTitlecaseComponent implements OnInit {

  title = null;

  constructor() { }

  ngOnInit(): void {
  }

}
