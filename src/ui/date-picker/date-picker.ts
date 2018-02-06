import * as moment from "moment";
import { EventEmitter } from "event-emitter-lite";

export class DatePicker {
    private format: string;
    private epochValue: number;
    private placeholder: string;
    private onChange = new EventEmitter<number>();
    private _uid: string;
    constructor() {
        let vdate:string= new Date().getTime().toString();        
        this.format = "dd/mm/yyyy";
        this.epochValue = new Date().getTime();
        this.placeholder = "";
        this._uid = `uid_dp${vdate}`;
    }
    private changeDate(vl: Event) {
        if (vl.target) {
            this.epochValue = moment(vl.target["value"], this.format.toUpperCase()).valueOf();
            this.onChange.emit(this.epochValue);
        }
    }
    private disconnectedCallback() {
        this.onChange.unsubscribeAll();
    }
}