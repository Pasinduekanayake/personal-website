import { Component } from '@angular/core';
import { DataObjectStructure } from './component-api/component-api.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lear-angular-new';

  post = {                           //this is the object we want to call outside the component
    title: "Title",
    likes: 50,
    isFavourite: true               
  }

  //when you pass an object, we need the type of the object so for that we can have an interface with the correct structure of the object we are passing
  //this interface can be code inside app.component or in the component-api.component, the advantage of coding it in the component-api.component is that we can import that interface anywhere we want
  ifFavouriteChange(eventArgs: DataObjectStructure){              
    console.log("Favourite Component Clicked", eventArgs)
  }
}
