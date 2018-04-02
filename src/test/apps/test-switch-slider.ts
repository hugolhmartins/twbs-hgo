export class TestSwitchSlider {
    private test: string;
    private refresh: Function;
    private checkHandler(pValue:string){
        this.test = pValue;
        this.refresh();
    }
}
