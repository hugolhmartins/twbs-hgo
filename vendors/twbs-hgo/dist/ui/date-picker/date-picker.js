define(["require", "exports", "moment", "event-emitter-lite"], function (require, exports, moment, event_emitter_lite_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var DatePicker = (function () {
        function DatePicker() {
            this.onChange = new event_emitter_lite_1.EventEmitter();
            var vdate = new Date().getTime().toString();
            this.format = "dd/mm/yyyy";
            this.epochValue = new Date().getTime();
            this.placeholder = "";
            this._uid = "uid_dp" + vdate;
        }
        DatePicker.prototype.changeDate = function (vl) {
            if (vl.target) {
                this.epochValue = moment(vl.target["value"], this.format.toUpperCase()).valueOf();
                this.onChange.emit(this.epochValue);
            }
        };
        DatePicker.prototype.disconnectedCallback = function () {
            this.onChange.unsubscribeAll();
        };
        return DatePicker;
    }());
    exports.DatePicker = DatePicker;
});
