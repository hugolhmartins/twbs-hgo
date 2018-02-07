define(["require", "exports", "event-emitter-lite"], function (require, exports, event_emitter_lite_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Pagination = (function () {
        function Pagination() {
            this.onSelectPage = new event_emitter_lite_1.EventEmitter();
            this.page = 1;
            this.count = 0;
            this.visiblePages = 3;
            this.rowsPerPage = 5;
        }
        Pagination.prototype.changePage = function (page) {
            page = Number(page);
            if (this.page !== page) {
                this.page = page;
                this.onSelectPage.emit(this.page);
            }
        };
        Pagination.prototype.disconnectedCallback = function () {
            this.onSelectPage.unsubscribeAll();
        };
        return Pagination;
    }());
    exports.Pagination = Pagination;
});
