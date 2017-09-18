import { Component,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'start-end-date-picker',
  templateUrl: './start-end-date-picker.component.html',
  styleUrls: ['../main.css']
})

export class StartEndPicker {
     @Output() startEndDateChange: EventEmitter<any> = new EventEmitter();
     
    dateValue1  = this.getCurrentDate()
    dateValue2  = this.getCurrentDate()
    stDt = new Date(this.dateValue1);
    endDt = new Date(this.dateValue2);
    showStartError = false;
    showEndError = false;
    differenceError = false;
    getCurrentDate(){
        let date,month;
        let currentDate = new Date();
        date = currentDate.getDate();
        month = currentDate.getMonth()+1; //Since January is 0
        let year = currentDate.getFullYear();

        if(date<10) {
            date='0'+date
        } 

        if(month<10) {
            month='0'+month
        } 

        let curDate = month+'-'+date+'-'+year;
        return curDate
    }
    dateModelChange1 (dt:Date) {
        this.stDt = new Date(dt);
        this.monthDiff(this.stDt,this.endDt)
        this.showStartError = this.validateDate(this.stDt);
         this.startEndDateChange.emit(dt);
    }
    dateModelChange2 (dt:Date) {
        this.endDt = new Date(dt);
        this.monthDiff(this.stDt,this.endDt)
        this.showEndError = this.validateDate(this.endDt);
        this.startEndDateChange.emit(dt);
    }
    monthDiff(d1, d2) {
        this.differenceError = false
        var months;
        months = (d2.getFullYear() - d1.getFullYear()) * 12;
        months -= d1.getMonth() + 1;
        months += d2.getMonth();
        if(months > 18){
            this.differenceError = true
        }
    }
    validateDate (dt:Date): boolean {
        if (this.stDt > this.endDt || isNaN(dt.getDate())) {
            return true;
        }
        else if(this.stDt < this.endDt) {
            this.showStartError = false;
            this.showEndError = false;
        }

    }
}