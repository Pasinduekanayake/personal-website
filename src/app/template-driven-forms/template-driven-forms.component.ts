import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-template-driven-forms',
  templateUrl: './template-driven-forms.component.html',
  styleUrls: ['./template-driven-forms.component.css']
})
export class TemplateDrivenFormsComponent implements OnInit {
 
  dropdown = [
    {id: 1, name: "option 1"},
    {id: 2, name: "option 2"},
    {id: 3, name: "option 3"}
  ];

  constructor(private router: Router) { }

  submit(formData : any){
    console.log(formData);

    this.router.navigate(['/dynamicRoutes'], {
      queryParams: { page:1, order: 'newest'}
    });      
    //so this is how we can navigate to another page after we click something. in this case ive navigating to dynamicRoutes after i submit the form
    //we can define query parameters in here aswell
  }

  ngOnInit(): void {
  }

}
