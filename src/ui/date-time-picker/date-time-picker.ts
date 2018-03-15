import * as moment from "moment";
import { EventEmitter } from "event-emitter-lite";

export class DatePicker {
    private format: string;
    private placeholder: string;
    private onChange = new EventEmitter<Date>();
    private hour:number;
    private minute:number;
    private selectedDate:Date;
    private _uid: string;
    private value: string;
    private refresh:Function;
    private config:{todayBtn:string,todayHighlight:boolean,inline:boolean,language:string};
    private isVisible:boolean;
    constructor() {
        //console.log('1-value:',this.value);
        this.format = "DD[/]MM[/]YYYY HH:mm";
        this.placeholder = "";
        this._uid = `uid_dp${new Date().getTime()}`;
        this.selectedDate = new Date();
        this.hour = this.selectedDate.getHours();
        this.minute = this.selectedDate.getMinutes();
        this.config = Object.assign({
            todayBtn: "linked",
            todayHighlight: true,
            inline: true,
            language:"pt-BR",
        }, {});
    }
    private changeDate(evt: {date:Date}) {
        this.selectedDate = evt.date;
    }
    private showCalendar(){
        if(this.value){
            this.selectedDate = this.decode(this.value);
            this.hour = this.selectedDate.getHours();
            this.minute = this.selectedDate.getMinutes();           
        }
        this.isVisible = true;
        this.refresh();
    }
    private decode(value: string): Date {
        return value && moment(value, this.format).toDate();
    }
    private detached() {
        this.onChange.unsubscribeAll();
    }
    private selectDate(){
        let hours = Number(this.hour) || 0;
        let mins = Number(this.minute) || 0;
        this.selectedDate.setHours(hours,mins);
        //this.removeStyleName("is-showing");
        //this.setValue(this.selectedDate);
        this.onChange.emit(this.selectedDate);
        this.value = moment(this.selectedDate).format(this.format);
        this.refresh({isVisible:false});
    }
}