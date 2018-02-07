define(["exports", "incremental-dom", "ferrugemjs/component-factory", "twbs-hgo/index"], function(exports, _idom, _libfjs_mod_, _twbs) {
    var __mod__zvTOCzRMf_EDDG1w2RXIk5_tmp = "_tmp_constructor_no_view__mod__zvTOCzRMf_EDDG1w2RXIk5";
    exports.default = (function(super_clazz) {
        function _clazz_sub_WfMHeRUlA7200niB4UkbA8_tmp() {
            super_clazz.call(this);
        };
        _clazz_sub_WfMHeRUlA7200niB4UkbA8_tmp.prototype = Object.create(super_clazz.prototype);
        _clazz_sub_WfMHeRUlA7200niB4UkbA8_tmp.prototype.constructor = _clazz_sub_WfMHeRUlA7200niB4UkbA8_tmp;
        _clazz_sub_WfMHeRUlA7200niB4UkbA8_tmp.prototype._$attrs$_ = {
            "name": "div",
            "static": ["class", "test-confirm-dialog"],
            "dinamic": "\"\""
        };
        _clazz_sub_WfMHeRUlA7200niB4UkbA8_tmp.prototype.render = function($_this_$) {
            if ($_this_$.showType === 'warning') {

                (function() {
                    var _$_inst_$_ = _libfjs_mod_.default.build({
                        "classFactory": _twbs.confirm_dialog,
                        "tag": "div",
                        "alias": "twbs:confirm-dialog",
                        "target": "",
                        "hostVars": {},
                        "staticVars": {
                            "title": "Alert Message",
                            "type": "warning",
                            "key:id": "tmp_key_inst_custom_compFaFbuZK6gcgcWmBxmSWkmI",
                            "is": "twbs:confirm-dialog"
                        }
                    });

                    _libfjs_mod_.default.content.call(_$_inst_$_, function() {

                        _idom.text("Alert");

                    });

                    _libfjs_mod_.default.reDraw.call(_$_inst_$_);

                })();
            };

            if ($_this_$.showType === 'info') {

                (function() {
                    var _$_inst_$_ = _libfjs_mod_.default.build({
                        "classFactory": _twbs.confirm_dialog,
                        "tag": "div",
                        "alias": "twbs:confirm-dialog",
                        "target": "",
                        "hostVars": {},
                        "staticVars": {
                            "title": "Info Message",
                            "type": "info",
                            "key:id": "tmp_key_inst_custom_compelAzJga7autgXt5k1vwfOt",
                            "is": "twbs:confirm-dialog"
                        }
                    });

                    _libfjs_mod_.default.content.call(_$_inst_$_, function() {

                        _idom.text("Info");

                    });

                    _libfjs_mod_.default.reDraw.call(_$_inst_$_);

                })();
            };

            if ($_this_$.showType === 'error') {

                (function() {
                    var _$_inst_$_ = _libfjs_mod_.default.build({
                        "classFactory": _twbs.confirm_dialog,
                        "tag": "div",
                        "alias": "twbs:confirm-dialog",
                        "target": "",
                        "hostVars": {},
                        "staticVars": {
                            "title": "Error Message",
                            "type": "error",
                            "key:id": "tmp_key_inst_custom_compKfRB9plNBRzzXnhIMzZLV8",
                            "is": "twbs:confirm-dialog"
                        }
                    });

                    _libfjs_mod_.default.content.call(_$_inst_$_, function() {

                        _idom.text("Error");

                    });

                    _libfjs_mod_.default.reDraw.call(_$_inst_$_);

                })();
            };

            if ($_this_$.showType === 'confirm') {

                (function() {
                    var _$_inst_$_ = _libfjs_mod_.default.build({
                        "classFactory": _twbs.confirm_dialog,
                        "tag": "div",
                        "alias": "twbs:confirm-dialog",
                        "target": "",
                        "hostVars": {},
                        "staticVars": {
                            "title": "Confirm Message",
                            "type": "confirm",
                            "key:id": "tmp_key_inst_custom_compPZo7HUa8Ik2jo0sBmndK13",
                            "is": "twbs:confirm-dialog"
                        }
                    });

                    _libfjs_mod_.default.content.call(_$_inst_$_, function() {

                        _idom.text("Confirm");

                    });

                    _libfjs_mod_.default.reDraw.call(_$_inst_$_);

                })();
            };

            _idom.elementOpen("button", null, ["class", "btn btn-warning"], "onclick", ($_this_$.refresh.bind($_this_$, {
                showType: 'warning'
            })));

            _idom.text("warning");

            _idom.elementClose("button");

            _idom.elementOpen("button", null, ["class", "btn btn-info"], "onclick", ($_this_$.refresh.bind($_this_$, {
                showType: 'info'
            })));

            _idom.text("info");

            _idom.elementClose("button");

            _idom.elementOpen("button", null, ["class", "btn btn-danger"], "onclick", ($_this_$.refresh.bind($_this_$, {
                showType: 'error'
            })));

            _idom.text("error");

            _idom.elementClose("button");

            _idom.elementOpen("button", null, ["class", "btn btn-success"], "onclick", ($_this_$.refresh.bind($_this_$, {
                showType: 'confirm'
            })));

            _idom.text("confirm");

            _idom.elementClose("button");
        };
        return _clazz_sub_WfMHeRUlA7200niB4UkbA8_tmp;
    })(function() {})
});