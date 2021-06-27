import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {

  isSelected = true;

  save(){
    this.isSelected != this.isSelected;
  }

  coursesList = [1, 2];

  //in here the exampleNgFor is a field, [] is a array, {} objects
  //so we are creating a new field called exampleNgFor and declearing an array of objects to it.
  //we can imagine this is a jason response coming from the API. we may have to create a field and initialize it to the jason response.
  exampleNgFor = [
    {id: 1, name: "pasindu"},   //this is an object
    {id: 2, name: "ekanayake"}
  ];

  addRecord(){
    this.exampleNgFor.push({id: 3, name:"kusal"});
  }

  removeRecord(example: exampleNgForInterface){
    this.exampleNgFor.splice(example.id);
  }


  apiData : any;

  loadData(){
    this.apiData = [
      {id: 1, name: "pasindu"},   
      {id: 2, name: "ekanayake"}
    ];
  }

  trackData(index : any, apiData : any){
    apiData = this.apiData;
    apiData ? apiData.id : undefined;
  }

  constructor() { }

  ngOnInit(): void {
  }

}

interface exampleNgForInterface{
  id: number,
  name: string
}
