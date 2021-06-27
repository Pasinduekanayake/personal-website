import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appFormat]'                //we can use this directive without using property binding syntax [].
})
export class FormatDirective {

  //this ElementRef helps us to access DOM objects
  constructor(private el: ElementRef) { }

  //so making "format" a Input, makes it a property that we can use in html
  //when we only have difined one property, we can use the selector name as alias to make the code cleaner. 
  @Input('appFormat') format !: string;    
  @Input('formatNew') formatNew !: string;

  //we should add the name of the DOM event in the hostListner.
  //blur event find whether the user click outside our target element. 
  //ex - if we want to know whether a user click outside a certain text field we can use blur event
  //ex - if we want to know whether a user click inside a certain text field we can use focus event
  @HostListener('blur') onBlur(){
    let outValue : string = this.el.nativeElement.value;       //this nativeElement helps us to access the DOM object so it will help us to access the value

    if(this.format == 'lowercase'){                              //so in here we have used the "format" property we created
      this.el.nativeElement.value = outValue.toLowerCase();      //this will make the value in the DOM object to uppercase, lowercase or whatever formatting we need.
    }else{
      this.el.nativeElement.value = outValue.toUpperCase();      //this will make the value in the DOM object to uppercase, lowercase or whatever formatting we need.
    }
    
  }      


}
