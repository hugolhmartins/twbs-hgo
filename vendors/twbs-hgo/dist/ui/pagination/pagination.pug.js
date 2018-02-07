define(["exports", "incremental-dom", "ferrugemjs/component-factory", "./pagination", "jquery", "twbs-pagination"], function(exports, _idom, _libfjs_mod_, _pagination, jq, _twbs_page) {
    var __pagination_tmp = Object.keys(_pagination)[0];
    exports.default = (function(super_clazz) {
        function _clazz_sub_ihp8tnG2bKI7SUgPMM4j8k_tmp() {
            super_clazz.call(this);
        };
        _clazz_sub_ihp8tnG2bKI7SUgPMM4j8k_tmp.prototype = Object.create(super_clazz.prototype);
        _clazz_sub_ihp8tnG2bKI7SUgPMM4j8k_tmp.prototype.constructor = _clazz_sub_ihp8tnG2bKI7SUgPMM4j8k_tmp;
        _clazz_sub_ihp8tnG2bKI7SUgPMM4j8k_tmp.prototype._$attrs$_ = {
            "name": "div",
            "static": [],
            "dinamic": "\"\""
        };
        _clazz_sub_ihp8tnG2bKI7SUgPMM4j8k_tmp.prototype.render = function($_this_$) {
            _idom.elementOpen("div", null, ["class", "ui_pagin_box"], "");

            _idom.elementClose("div");

            if ($_this_$.count) {

                (function() {
                    window.setTimeout(function() {
                        jq('.ui_pagin_box').twbsPagination('destroy');
                        jq('.ui_pagin_box').twbsPagination({
                            totalPages: Math.ceil((this.count) / this.rowsPerPage),
                            currentPage: this.page,
                            visiblePages: this.visiblePages,
                            first: '&laquo;',
                            prev: '&lsaquo;',
                            next: '&rsaquo;',
                            last: '&raquo;',
                            onPageClick: function(event, page) {
                                this.changePage(page - 1);
                            }.bind(this)
                        });
                    }.bind(this), 200)
                }.bind($_this_$))();
            };
        };
        return _clazz_sub_ihp8tnG2bKI7SUgPMM4j8k_tmp;
    })(_pagination[__pagination_tmp]);
});