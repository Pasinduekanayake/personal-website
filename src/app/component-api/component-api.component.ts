import { Component, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-component-api',
  templateUrl: './component-api.component.html',
  styleUrls: ['./component-api.component.css']
  //we can have a property called encapsulation to use the styles defined inside this component only inside this component.
  //view encapsulation has 3 options.
  //shadow DOM allows to use styles only inside the component which we are using the view encapsulation.
  //1) emulated option emulates the shadow DOM 
  //2) native creates a shadow root(in here all the external styles(bootstrap etc.) will be dissapeared, you can have those stlyes only by importing them again here)
  //3) none means the stles in this component will be affected to the entire project
  //encapsulation: ViewEncapsulation.Emulated
})
export class ComponentAPIComponent{

  //a component API(public API) is a component wich has a input and a output properties.
  //by having a public API, it makes the component resusable
  //input properties help us to define values to the properties inside the component from outside
  //output properties help us to call events inside the component from outside the component
  //we can define input and output properties when we call this component. i used this component in app.component.html

  //in the new version we cant have fields without declearing them inside the constructor so we use ! sign infront to avoid it.
  @Input() isFavourite!: boolean;     //this is a input property. this became an input property by using the input declerator as @Input()

  //we can define an alias(a pet name) for this field. we should give the aias name inside the input declarator 
  //so because we have an alias, we should call this input property by that alias name.
  @Input('pet-title') title!: string; 

  //we can have an alias the same way we do that in the input declarator
  @Output() change = new EventEmitter();  //we use eventemmiter to raise an event

  //we can pass data to the event inside the emit method
  onClick(){
    this.isFavourite =! this.isFavourite;
    this.change.emit(this.isFavourite);            //here we passed a simple boolean value
    this.change.emit({ dataObject: this.isFavourite });         //so instead of having a simple boolean value, we can have objectes aswell
  }

}

//we need to create an interface to initialise the structure of the dataObject object in the emit method
export interface DataObjectStructure{
  newValue: boolean
}