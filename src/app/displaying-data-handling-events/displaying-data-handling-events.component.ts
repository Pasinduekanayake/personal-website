import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-displaying-data-handling-events',
  templateUrl: './displaying-data-handling-events.component.html',
  styleUrls: ['./displaying-data-handling-events.component.css']
})
export class DisplayingDataHandlingEventsComponent implements OnInit {

  title = "Heading";
  imgUrl = "pic_trulli.jpg";
  cols = 2;

  isActive = true;         //we can bind a class using property binding syntax and we can give any condition we want, in this case we define to bind the class if "isActive=true"
  ngOnInit(): void {
  }

  onClick(){
    console.log("button was clicked");
  }

  getEvent($event: any){
    $event.stopPropagation();                 //this is an handler that will prevent event bubbling.
    console.log($event);
  }

//event bubble is when we try to access event object in the event handler, the event parameter bubble up the DOM tree
//(if we access event object in event handler in a button element that is inside a div element and if that div also has a event, that event in the button will trigger the element in the div aswell)
  eventBubbling(){
    console.log("You click event bubble");          
  }


  onKeyUp($event: any){
    if ($event === 13) console.log("Enter was pressed");
  }

  newOnKeyUp(){
    console.log("Enter was pressed");
  }


  getValue($event: any){
    console.log($event.target.value);
  }

  newGetValue(email: any){
    console.log(email);
  }

  newEmail = "my@email.com";

  getInput(){
    console.log(this.newEmail);
  }

  getInputTwoWay(){
    console.log(this.newEmail);
  }

  course = {
    title : "Lets learn pipes.",
    percentage : 4.125432,
    employees : 23421,
    salary : 3423.4930,
    dateNow : new Date(2021,5,20)
  };

  customPipeValue = "oakndfnksodfn sdkofnskndfmk afknqpfnqepfw vfpwenfpqfmnwopqm qwfnqpwfmpkqmefpkqef evm efpeqnfkqnekfqp"

}

