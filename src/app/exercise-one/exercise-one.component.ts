import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercise-one',
  templateUrl: './exercise-one.component.html',
  styleUrls: ['./exercise-one.component.css']
})
export class ExerciseOneComponent {

  constructor(private likes: number, private status: boolean){

  }

  addLike(){
      if(this.status){
          this.likes--;
          this.status = false;
      }else{
          this.likes++;
          this.status = true;
      }
  }

  /*get Likes(){
    return this.likes;
  }

  get Status(){
    return this.status;
  }*/

  //a new way of writing the same logic in "addLike()" method
  newWay0fAddLike(){
      //checking if the status is true "(this.status) ?"
      //adding some value to likes "this.likes +="
      //add -1 if the condition is true or else add 1 "-1 : 1"
      //all the syntax together will make the following line of code
      this.likes += (this.status) ? -1 : 1;     
      this.status != this.status;
  }

}
