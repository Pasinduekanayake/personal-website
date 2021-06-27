import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-component-example',
  templateUrl: './component-example.component.html',
  styleUrls: ['./component-example.component.css']
})
export class ComponentExampleComponent {

  title = "Course Names";

    coursesArray;
    courseCount;

    constructor(newServiceObject: CourseService){                                 //we are calling the course service(an object) in a constructor because objects can be initialize only inside a constructor
        //by putting this inside the consructor brackets, we are letting angular to make an instance of the CourseService object instead of we doing it manually. we call this DEPENDANCY INJECTION 
        //DEPENDANCY INJECTION = injecting or providing the dependancies of a class to the constructor

        //let newServiceObject = new CourseService();                         //this way is not good because 1)there will be issues when unit testing 2)if in the future, someone adds a parameter, then we have to change this manually
        this.coursesArray = newServiceObject.getCourse();
        this.courseCount = newServiceObject.getCourseCount();
    }

}
