export class TestSwitchSlider {
    private test: string;
    private refresh: Function;
    constructor(){
    	this.test = '';
    }
    private checkHandler(pValue:string){
        this.test = pValue;
        this.refresh();
    }
}
