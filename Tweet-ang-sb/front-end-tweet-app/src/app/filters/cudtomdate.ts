import { DatePipe } from "@angular/common";
import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'customDate'
  })
  export class CustomDatePipe extends 
               DatePipe implements PipeTransform {
    transform(value: any): any {
      var diff = Math.floor(value.getTime() - new Date().getTime());
    var day = 1000 * 60 * 60 * 24;

    var days = Math.floor(diff/day);
    var months = Math.floor(days/31);
    var years = Math.floor(months/12);

    var message = new Date().toDateString();
    message += " was "
    message += days + " days " 
    message += months + " months "
    message += years + " years ago \n"

    return message;
    }
  }