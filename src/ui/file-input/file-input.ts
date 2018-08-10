import { EventEmitter, IEventSubscribe } from "event-emitter-lite";

export class FileInput{
    public onSelect = new EventEmitter<Blob>();
    public placehold:string;
    private refresh:Function;
    private accept:string;

    constructor(){
        this.accept= "";
    }
    private getFile(pevt:{target:{files:Blob[]}}){
        this.onSelect.emit(pevt.target.files[0]);
        this.placehold = (<any>pevt.target.files[0]).name;        
        this.refresh();
    }    
	private detached(){
	}
}