import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-records',
  templateUrl: './records.component.html',
  styleUrls: ['./records.component.css']
})
export class RecordsComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  //you can use the values of route parameters by two ways
  //1. you can subscribe to paramMap observable and access the parameters in side it
  //2. you can use snapshot to access the parameters without subscribing

  //the main diference between these two approaches is that in the paramMap subscription, the DOM initialise a screen one time and we can navigate back and forth without having to destroy each page we were in(listen to mosh if needed)
  //in the snapshot approach we destroy the previouse page each time we navigates to a new page so the snapshot will access the parameter each time we land to this screen

  //for most of the projects snapshot is widely used and its easier aswell.
  ngOnInit(): void {
    this.route.paramMap
      .subscribe(param => {
        let val = param.get('id');         //this is a string value but we should be able to make it a integer by using + mark but seems like thats not working.
        console.log(val);
      });

    this.route.snapshot.paramMap.get('id');    //this is how we can access paramters by using snapshot
  }

}
