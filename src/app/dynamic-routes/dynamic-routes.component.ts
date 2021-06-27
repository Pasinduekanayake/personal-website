import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import {combineLatest} from "rxjs/index";

@Component({
  selector: 'app-dynamic-routes',
  templateUrl: './dynamic-routes.component.html',
  styleUrls: ['./dynamic-routes.component.css']
})
export class DynamicRoutesComponent implements OnInit {

  recordList = [
    {id: 1, name: "record one"},
    {id: 2, name: "record two"},
    {id: 3, name: "record three"}
  ]

  //query parameters are the parameters in addition to the route parameters. we have these in the html file( check the nav-bar html file )
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    //same as we access the route parameters, theres a observable called queryParamMap used to access query parameters
    //same as before there are two ways to access this
    //but this time we mostly subscribe to the queryParamMap observable instead of using snapshot
    //the reason is when we use query parameters to pagination, we do not navigate to a new UI when we click the next button in a table
    //it should change only the list of records from 1-10 to 11-20 or something like that
    //since snapshot distroy the previouse page inorder to navigate to the new page by using it here, we would have to re initialise the UI component each time we paginate so its not a good thing

    //because we would have to subscribe to paramMap and queryParamMap both, we can use a new import called Observable to combine both these observables into one observable
    //so that we can subscribe to that newly created observable
    let combinedObservables = combineLatest([
      this.route.paramMap,
      this.route.queryParamMap
    ]);    //combining two observables into one called combinedObservables

    combinedObservables.subscribe(val => {
      let id = val[0].get('id');                //each observable values are stored in an array so we have to access them as in an array
      let page = val[1].get('page');
    })       //and we are subscribing to that new observable here

  }

}
