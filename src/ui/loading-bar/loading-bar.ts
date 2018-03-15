export class LoadingBar{
	private isLoading:boolean;
	private refresh:Function;
	private barColor:string;
	constructor(){
		this.barColor = "#6ad7ef";
	}
	private set show(on:boolean){
		this.refresh({
			isLoading:on
		});
	}
	private detached(){
		this.refresh({
			isLoading:false
		}); 
	}
}