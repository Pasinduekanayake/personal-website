import { Component } from '@angular/core';

@Component({
  selector: 'app-exercise-favorite-component',
  templateUrl: './exercise-favorite-component.component.html',
  styleUrls: ['./exercise-favorite-component.component.css']
})
export class ExerciseFavoriteComponentComponent {

  status = false;

  changeStatus(){
    this.status =! this.status;
  }

  //testing version issues
  count !: number;

  numCount(count : number){
    count = this.count;
    console.log(count)
  }

}
