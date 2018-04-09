export class TestSwitchSlider {
    private test: string;
    private refresh: Function;
    constructor(){
    	this.test = '';
    }
    private checkHandler(pValue:string){
        console.log("checkHandler", pValue);
        this.test = pValue;
        this.refresh();
    }
    private uncheckHandler(pValue:string){
        console.log("uncheckHandler", pValue);
        this.test = pValue;
        this.refresh();
    }
}
