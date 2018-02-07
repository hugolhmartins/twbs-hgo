define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var LoadingBar = (function () {
        function LoadingBar() {
            this.barColor = "#6ad7ef";
        }
        Object.defineProperty(LoadingBar.prototype, "show", {
            set: function (on) {
                this.refresh({
                    isLoading: on
                });
            },
            enumerable: true,
            configurable: true
        });
        LoadingBar.prototype.disconnectedCallback = function () {
            this.refresh({
                isLoading: false
            });
        };
        return LoadingBar;
    }());
    exports.LoadingBar = LoadingBar;
});
