import { EventEmitter, IEventSubscribe } from "event-emitter-lite";

export class ConfirmDialog{
	public onConfirm = new EventEmitter<boolean>();
	private confirm(){
		this.onConfirm.emit(true);
	}
	private disconnectedCallback(){
		this.onConfirm.unsubscribeAll();
	}
}
