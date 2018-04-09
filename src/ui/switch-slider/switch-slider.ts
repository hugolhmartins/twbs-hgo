import {EventEmitter} from "event-emitter-lite";
export class SwitchSlider{
    public onCheck = new EventEmitter<string>(); 
    public onUncheck = new EventEmitter<string>();
	private selected:boolean;
	private type:string;
	private checked:string;
    private disabled:string;
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
	private set value(value:boolean){
        this.selected = value ? true : false;
        if(this.selected){
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