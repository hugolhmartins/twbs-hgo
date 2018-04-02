import {EventEmitter} from "event-emitter-lite";
export class SwitchSlider{
	public onCheck = new EventEmitter<string>(); 
	private selected:boolean;
	private type:string;
	private checked:string;
    private disabled:string;
    private checkedValue: string;
    private unCheckedValue: string;
	constructor(){
        this.type = "square";
        this.checkedValue = "y";
        this.unCheckedValue = "n";
	}
	private set value(value:boolean){
        this.selected = value ? true : false;
		this.onCheck.emit(this.selected ? this.checkedValue : this.unCheckedValue);
	}
}