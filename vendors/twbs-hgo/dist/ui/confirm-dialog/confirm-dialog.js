define(["require", "exports", "event-emitter-lite"], function (require, exports, event_emitter_lite_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ConfirmDialog = (function () {
        function ConfirmDialog() {
            this.onConfirm = new event_emitter_lite_1.EventEmitter();
        }
        ConfirmDialog.prototype.confirm = function () {
            this.onConfirm.emit(true);
        };
        ConfirmDialog.prototype.disconnectedCallback = function () {
            this.onConfirm.unsubscribeAll();
        };
        return ConfirmDialog;
    }());
    exports.ConfirmDialog = ConfirmDialog;
});
