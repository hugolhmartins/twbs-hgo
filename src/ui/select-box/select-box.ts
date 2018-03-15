import { EventEmitter, IEventSubscribe } from "event-emitter-lite";
export class SelectBox {
    private _data: any[];
    private value: string;
    private valueField: string;
    private descField: string;
    private descFilter: string;
    private isVisibleList: boolean;
    public onSelect = new EventEmitter<string>();
    private refresh: Function;
    private selectedIndex: number;
    private arrowIndex: number;
    private isSearching: boolean;
    private placeholder:string;
    constructor() {
        this._data = [];
        this.valueField = "id";
        this.descField = "desc";
        this.value = "";
        this.selectedIndex = -1;
        this.arrowIndex = -1;
        this.placeholder = "";
    }
    private attached() {
        //this.setDescFromValue();
    }
    private setSelectedOption(evt: Event) {
        let target: any = evt.target;
        let selectedValue = target.options[target.selectedIndex].value;
        //this.value = selectedValue;
        this.onSelect.emit(selectedValue);
    }
    private getSelectedDesc(){
        let dtaLength = this.data.length;
        if ((!this.isSearching) && dtaLength && this.selectedIndex > -1 && this.selectedIndex < dtaLength) {
            return new String(this.data[this.selectedIndex][this.descField]);
        }
        return new String();
    }
    private setIndexFromValue() {
        let indxkeeped = 0;
        let hasItem = this.data.some((dta, indx) => {
            indxkeeped = indx;
            return String(dta[this.valueField]) === String(this.value);
        });
        if (hasItem) {
            this.selectedIndex = indxkeeped;
        }
    }
    private detached() {
        this.onSelect.unsubscribeAll();
    }
    private get data() {
        if (this.descFilter) {
            return this._data.filter(opt => {
                return opt[this.descField].toLowerCase().indexOf(this.descFilter.toLowerCase()) > -1;
            });
        }
        return this._data;
    }
    private set data(dta: any[]) {
        this._data = dta;
    }
    private clickListHandler(evt: { target: any }) {
        let el = evt.target;
        while (el && el.tagName !== "LI") {
            el = el.parentNode;
        }
        if (el) {
            let indx = parseInt(el.getAttribute("data-indx"));
            this.selectedIndex = indx;
            let itemSelected = this.data[indx];
            this.onSelect.emit(itemSelected);
            this.isVisibleList = false;
            this.isSearching = false;
            this.refresh();
        }
    }
    private setDescFilter(evt: KeyboardEvent) {
        if (evt.keyCode === 13) {
            //enter
            this.isVisibleList = false;
            this.selectedIndex = this.arrowIndex;
            if (this.data.length && this.selectedIndex < this.data.length) {
                this.isSearching = false;
                let selectedItem = this.data[this.selectedIndex];
                this.onSelect.emit(selectedItem);
            }
        } else if (evt.keyCode === 40) {
            //down	
            evt.preventDefault();
            this.arrowIndex++;
            if (this.arrowIndex >= this.data.length) {
                this.arrowIndex = this.data.length - 1;
            }
        } else if (evt.keyCode === 38) {
            //up
            evt.preventDefault();
            this.arrowIndex--;
            if (this.arrowIndex < 0) {
                this.arrowIndex = 0;
            }
        } else {
            //any other
            if (!this.isVisibleList) {
                this.isVisibleList = true;
            }
            this.isSearching = true;
            this.descFilter = evt.target["value"];
        }
        this.refresh();
    }
}
