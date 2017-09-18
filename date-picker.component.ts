import { NgModule, Component, Input, Output, EventEmitter, AfterViewInit } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
    selector: 'date-picker',
    providers: [DatePipe],
    templateUrl: './date-picker.component.html',
    styleUrls: ['./date-picker.component.css']
})
export class DatepickerWrapperComponent {
    public dt: Date = new Date();
    @Input() value: string;
    @Output() dateModelChange: EventEmitter<any> = new EventEmitter();
    showDatepicker: boolean = false;
  disabledDate = ["2015-11-28","2015-11-14","2017-11-21"]
  maxDate = new Date("2017-06-10");
    constructor(private datePipe: DatePipe) {
        new Date();
    }
     ngAfterViewInit () {
         this.dt = new Date(this.value);
     }
    private transformDate(date:Date):string {
        var d = this.datePipe.transform(date, 'MM-dd-yyyy');
        return d;
    }

    private apply(dt:Date): void {
        this.value = this.transformDate(dt);
        this.dateModelChange.emit(dt);
    }

    open() {
        this.showDatepicker = true;
    }
    toggle() {
        this.showDatepicker = !this.showDatepicker;
    }
    close() {
        this.showDatepicker = false;
    }
    
    onSelectionDone(event) {
        this.dt = event;
        this.apply(this.dt);
        this.close();
    }
    onClickedOutside(event) {
        if (this.showDatepicker) this.close();
    }

    onManualDateEntry() {
        if(Date.parse(this.value)) {
            this.onSelectionDone(this.value);
        }
        else {
            this.dateModelChange.emit(new Date('30/2/14'));
        }
    }
    
}

