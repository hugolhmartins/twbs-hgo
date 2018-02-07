define(["exports", "incremental-dom", "ferrugemjs/component-factory", "./test-select-box", "twbs-hgo/index"], function(exports, _idom, _libfjs_mod_, _test_select_box, _hgo) {
    var __test_select_box_tmp = Object.keys(_test_select_box)[0];
    exports.default = (function(super_clazz) {
        function _clazz_sub_gDlWhOx_JFvHzguLfKJ8JJ_tmp() {
            super_clazz.call(this);
        };
        _clazz_sub_gDlWhOx_JFvHzguLfKJ8JJ_tmp.prototype = Object.create(super_clazz.prototype);
        _clazz_sub_gDlWhOx_JFvHzguLfKJ8JJ_tmp.prototype.constructor = _clazz_sub_gDlWhOx_JFvHzguLfKJ8JJ_tmp;
        _clazz_sub_gDlWhOx_JFvHzguLfKJ8JJ_tmp.prototype._$attrs$_ = {
            "name": "div",
            "static": ["class", "test-select-box"],
            "dinamic": "\"\""
        };
        _clazz_sub_gDlWhOx_JFvHzguLfKJ8JJ_tmp.prototype.render = function($_this_$) {
            (function() {
                var _$_inst_$_ = _libfjs_mod_.default.build({
                    "classFactory": _hgo.select_box,
                    "tag": "div",
                    "alias": "hgo:select-box",
                    "target": "",
                    "hostVars": {
                        "data": ($_this_$.data)
                    },
                    "staticVars": {
                        "valuefield": "id",
                        "descfield": "desc",
                        "key:id": "tmp_key_inst_custom_comprER4fd023HHB6a0kxuw7ks",
                        "is": "hgo:select-box"
                    }
                });

                _libfjs_mod_.default.reDraw.call(_$_inst_$_);

            })();
        };
        return _clazz_sub_gDlWhOx_JFvHzguLfKJ8JJ_tmp;
    })(_test_select_box[__test_select_box_tmp]);
});