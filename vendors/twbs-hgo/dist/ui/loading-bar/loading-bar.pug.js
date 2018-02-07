define(["exports", "incremental-dom", "ferrugemjs/component-factory", "./loading-bar", "css-loader!./loading-bar.css"], function(exports, _idom, _libfjs_mod_, _loading_bar) {
    var __loading_bar_tmp = Object.keys(_loading_bar)[0];
    exports.default = (function(super_clazz) {
        function _clazz_sub_mCtgCvjW5TK6PbWCwWe0_2_tmp() {
            super_clazz.call(this);
        };
        _clazz_sub_mCtgCvjW5TK6PbWCwWe0_2_tmp.prototype = Object.create(super_clazz.prototype);
        _clazz_sub_mCtgCvjW5TK6PbWCwWe0_2_tmp.prototype.constructor = _clazz_sub_mCtgCvjW5TK6PbWCwWe0_2_tmp;
        _clazz_sub_mCtgCvjW5TK6PbWCwWe0_2_tmp.prototype._$attrs$_ = {
            "name": "div",
            "static": ["class", "ui-loading-bar"],
            "dinamic": "\"\""
        };
        _clazz_sub_mCtgCvjW5TK6PbWCwWe0_2_tmp.prototype.render = function($_this_$) {
            _idom.elementOpen("div", null, [""], "class", ('ui-bar ' + ($_this_$.isLoading ? 'is-loading' : '')), "style", ('background-color:' + $_this_$.barColor));

            _idom.elementClose("div");
        };
        return _clazz_sub_mCtgCvjW5TK6PbWCwWe0_2_tmp;
    })(_loading_bar[__loading_bar_tmp]);
});