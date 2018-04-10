import {EventEmitter} from "event-emitter-lite";
export class SwitchSlider{
    public onCheck = new EventEmitter<string>(); 
    public onUncheck = new EventEmitter<string>();
    private isDisabled:boolean;
    private isChecked:boolean;
	private type:string;
    private checkedValue: string;
    private uncheckedValue: string;
    private checkedColor: string;
    private uncheckedColor: string;
    private refresh: Function;
	constructor(){
        this.type = "square";
        this.checkedValue = "y";
        this.uncheckedValue = "n";
        this.checkedColor = "#4d7498";
        this.uncheckedColor = "#af5757";
	}
    private set disabled(disable: boolean){
        this.isDisabled = false;
    }
    private set value(value:string){
        this.isChecked = value === this.checkedValue ? true : false;
    }
    private clickHandler(){
        this.isChecked = !this.isChecked;
        if(this.isChecked){
            this.onCheck.emit(this.checkedValue);
        }else{
            this.onUncheck.emit(this.uncheckedValue);
        }
        this.refresh();
    }
	private detached(){
        this.onCheck.unsubscribeAll();
        this.onUncheck.unsubscribeAll();
	}
}