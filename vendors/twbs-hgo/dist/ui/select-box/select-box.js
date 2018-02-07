define(["require", "exports", "event-emitter-lite"], function (require, exports, event_emitter_lite_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var SelectBox = (function () {
        function SelectBox() {
            this.onSelect = new event_emitter_lite_1.EventEmitter();
            this._data = [];
            this.valueField = "id";
            this.descField = "desc";
            this.value = "";
            this.selectedIndex = -1;
            this.arrowIndex = -1;
        }
        SelectBox.prototype.connectedCallback = function () {
        };
        SelectBox.prototype.setSelectedOption = function (evt) {
            var target = evt.target;
            var selectedValue = target.options[target.selectedIndex].value;
            this.onSelect.emit(selectedValue);
        };
        SelectBox.prototype.getSelectedDesc = function () {
            var dtaLength = this.data.length;
            if ((!this.isSearching) && dtaLength && this.selectedIndex > -1 && this.selectedIndex < dtaLength) {
                return new String(this.data[this.selectedIndex][this.descField]);
            }
            return this.descField;
        };
        SelectBox.prototype.setIndexFromValue = function () {
            var _this = this;
            var indxkeeped = 0;
            var hasItem = this.data.some(function (dta, indx) {
                indxkeeped = indx;
                return String(dta[_this.valueField]) === String(_this.value);
            });
            if (hasItem) {
                this.selectedIndex = indxkeeped;
            }
        };
        SelectBox.prototype.disconnectedCallback = function () {
            this.onSelect.unsubscribeAll();
        };
        Object.defineProperty(SelectBox.prototype, "data", {
            get: function () {
                var _this = this;
                if (this.descFilter) {
                    return this._data.filter(function (opt) {
                        return opt[_this.descField].toLowerCase().indexOf(_this.descFilter.toLowerCase()) > -1;
                    });
                }
                return this._data;
            },
            set: function (dta) {
                this._data = dta;
            },
            enumerable: true,
            configurable: true
        });
        SelectBox.prototype.clickListHandler = function (evt) {
            var el = evt.target;
            while (el && el.tagName !== "LI") {
                el = el.parentNode;
            }
            if (el) {
                var indx = parseInt(el.getAttribute("data-indx"));
                this.selectedIndex = indx;
                var itemSelected = this.data[indx];
                this.onSelect.emit(itemSelected);
                this.isVisibleList = false;
                this.isSearching = false;
                this.refresh();
            }
        };
        SelectBox.prototype.setDescFilter = function (evt) {
            if (evt.keyCode === 13) {
                this.isVisibleList = false;
                this.selectedIndex = this.arrowIndex;
                if (this.data.length && this.selectedIndex < this.data.length) {
                    this.isSearching = false;
                    var selectedItem = this.data[this.selectedIndex];
                    this.onSelect.emit(selectedItem);
                }
            }
            else if (evt.keyCode === 40) {
                evt.preventDefault();
                this.arrowIndex++;
                if (this.arrowIndex >= this.data.length) {
                    this.arrowIndex = this.data.length - 1;
                }
            }
            else if (evt.keyCode === 38) {
                evt.preventDefault();
                this.arrowIndex--;
                if (this.arrowIndex < 0) {
                    this.arrowIndex = 0;
                }
            }
            else {
                if (!this.isVisibleList) {
                    this.isVisibleList = true;
                }
                this.isSearching = true;
                this.descFilter = evt.target["value"];
            }
            this.refresh();
        };
        return SelectBox;
    }());
    exports.SelectBox = SelectBox;
});
