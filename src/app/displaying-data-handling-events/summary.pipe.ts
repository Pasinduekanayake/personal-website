import { Pipe, PipeTransform } from '@angular/core';

@Pipe({                              //we call this declarator function here to make this class a pipe. we should give a name to it and when we call this pipe, we should use this name
    name: 'summary'
})

//this pipetransform is an interface so we implements it into this class because we need it to be a pipe.
//since this is an interface, it has a defined structure. we cant implement pipetransform without having the transform method.
export class SummaryPipe implements PipeTransform{
    transform( value: String, limit?: number ){           //we can have any number of parameters in this method. we will be able give parameter values where we call this custom pipe.
 
        //if( value ) {}  will evaluate to true if value is not: null, undefined, NaN, empty string '', 0, false
        if(!value){
            return null;
        }

        let actualLimit = (limit) ? limit: 50;                //this statement is a simple if statement wrote using simplified typescript syntax

        return value.substring(0, actualLimit) + "...";         //this substring method will reduce the characters in the value string. 0 is the start 50 is the end. the "..." is just for appearance
    }
}