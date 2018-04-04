import {EventEmitter} from "event-emitter-lite";
export class SwitchSlider{
	public onCheck = new EventEmitter<string>(); 
	private selected:boolean;
	private type:string;
	private checked:string;
    private disabled:string;
    private checkedValue: string;
    private unCheckedValue: string;
    private checkedColor: string;
    private unCheckedColor: string;
    private refresh: Function;
	constructor(){
        this.type = "square";
        this.checkedValue = "y";
        this.unCheckedValue = "n";
        this.checkedColor = "#4d7498";
        this.unCheckedColor = "#af5757";
	}
	private set value(value:boolean){
        this.selected = value ? true : false;
		this.onCheck.emit(this.selected ? this.checkedValue : this.unCheckedValue);
	}
	private detached(){
		this.onCheck.unsubscribeAll();
	}
}