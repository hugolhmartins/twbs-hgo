define(["exports", "incremental-dom", "ferrugemjs/component-factory", "twbs-hgo/block-code/block-code.pug", "./apps/test-loading-bar.pug", "./apps/test-confirm-dialog.pug", "./apps/test-pagination-box.pug", "./apps/test-date-picker.pug", "./apps/test-select-box.pug", "./struture/nav-bar.pug", "css-loader!./init-app.css"], function(exports, _idom, _libfjs_mod_, _block_code, _test_loading_bar, _test_confirm_dialog, _test_pagination_box, _test_date_picker, _test_select_box, _top_nav_bar) {
    var __mod__ZvwL9_xjlDibr00dS_M_Vp_tmp = "_tmp_constructor_no_view__mod__ZvwL9_xjlDibr00dS_M_Vp";
    exports.default = (function(super_clazz) {
        function _clazz_sub_HtR0v_btS0NKl7ArDhCPUi_tmp() {
            super_clazz.call(this);
        };
        _clazz_sub_HtR0v_btS0NKl7ArDhCPUi_tmp.prototype = Object.create(super_clazz.prototype);
        _clazz_sub_HtR0v_btS0NKl7ArDhCPUi_tmp.prototype.constructor = _clazz_sub_HtR0v_btS0NKl7ArDhCPUi_tmp;
        _clazz_sub_HtR0v_btS0NKl7ArDhCPUi_tmp.prototype._$attrs$_ = {
            "name": "div",
            "static": ["class", "container init-app"],
            "dinamic": "\"\""
        };
        _clazz_sub_HtR0v_btS0NKl7ArDhCPUi_tmp.prototype.render = function($_this_$) {
            (function() {
                var _$_inst_$_ = _libfjs_mod_.default.build({
                    "classFactory": _top_nav_bar.default,
                    "tag": "div",
                    "alias": "top-nav-bar",
                    "target": "",
                    "hostVars": {},
                    "staticVars": {
                        "key:id": "tmp_key_inst_custom_compMCvk5BRzZ_LHeM7urhVM15",
                        "is": "top-nav-bar"
                    }
                });

                _libfjs_mod_.default.reDraw.call(_$_inst_$_);

            })();

            _idom.elementOpen("div", null, ["class", "col-xs-12 no-padding-horizontal"], "");

            _idom.elementOpen("h2", null, [""], "");

            _idom.text("Instalation");

            _idom.elementClose("h2");

            _idom.elementOpen("div", null, ["class", "bs-example"], "");

            _idom.elementOpen("h4", null, [""], "");

            _idom.text("npm");

            _idom.elementClose("h4");

            _idom.elementOpen("pre", null, [""], "");

            _idom.elementOpen("code", null, [""], "");

            _idom.text("npm install twbs-hgo --save");

            _idom.elementClose("code");

            _idom.elementClose("pre");

            _idom.elementOpen("h4", null, [""], "");

            _idom.text("template pug  ");

            _idom.elementClose("h4");

            (function() {
                var _$_inst_$_ = _libfjs_mod_.default.build({
                    "classFactory": _block_code.default,
                    "tag": "div",
                    "alias": "block-code",
                    "target": "",
                    "hostVars": {},
                    "staticVars": {
                        "src": "src/test/apps/install-pug.pug",
                        "language": "pug",
                        "key:id": "tmp_key_inst_custom_compPTi0Nx2GpfHk2HcEu9KmJn",
                        "is": "block-code"
                    }
                });

                _libfjs_mod_.default.reDraw.call(_$_inst_$_);

            })();

            _idom.elementOpen("h4", null, [""], "");

            _idom.text("template html");

            _idom.elementClose("h4");

            (function() {
                var _$_inst_$_ = _libfjs_mod_.default.build({
                    "classFactory": _block_code.default,
                    "tag": "div",
                    "alias": "block-code",
                    "target": "",
                    "hostVars": {},
                    "staticVars": {
                        "src": "src/test/apps/install-html.html",
                        "language": "xml",
                        "key:id": "tmp_key_inst_custom_compvAitapVTSc92h6sXt3JiOz",
                        "is": "block-code"
                    }
                });

                _libfjs_mod_.default.reDraw.call(_$_inst_$_);

            })();

            _idom.elementClose("div");

            _idom.elementOpen("h2", null, [""], "");

            _idom.text("Components");

            _idom.elementClose("h2");

            _idom.elementOpen("h3", null, [""], "");

            _idom.text("Loading Bar");

            _idom.elementOpen("h4", null, [""], "");

            _idom.text("A loading bar");

            _idom.elementClose("h4");

            _idom.elementClose("h3");

            _idom.elementOpen("div", null, ["class", "bs-example"], "");

            _idom.elementOpen("h4", null, [""], "");

            _idom.text("Example");

            _idom.elementClose("h4");

            (function() {
                var _$_inst_$_ = _libfjs_mod_.default.build({
                    "classFactory": _test_loading_bar.default,
                    "tag": "div",
                    "alias": "test-loading-bar",
                    "target": "",
                    "hostVars": {},
                    "staticVars": {
                        "key:id": "tmp_key_inst_custom_compgdOnV1LMuHo1IeAe3fKacL",
                        "is": "test-loading-bar"
                    }
                });

                _libfjs_mod_.default.reDraw.call(_$_inst_$_);

            })();

            (function() {
                var _$_inst_$_ = _libfjs_mod_.default.build({
                    "classFactory": _block_code.default,
                    "tag": "div",
                    "alias": "block-code",
                    "target": "",
                    "hostVars": {},
                    "staticVars": {
                        "src": "src/test/apps/test-loading-bar.pug",
                        "language": "pug",
                        "key:id": "tmp_key_inst_custom_compPKotWkpwhfvoM1hCNtcd7N",
                        "is": "block-code"
                    }
                });

                _libfjs_mod_.default.reDraw.call(_$_inst_$_);

            })();

            _idom.elementClose("div");

            _idom.elementOpen("h3", null, [""], "");

            _idom.text("Confirm Dialog");

            _idom.elementOpen("h4", null, [""], "");

            _idom.text("A wrapper to comfirm dialog ");

            _idom.elementClose("h4");

            _idom.elementClose("h3");

            _idom.elementOpen("div", null, ["class", "bs-example"], "");

            _idom.elementOpen("h4", null, [""], "");

            _idom.text("Example");

            _idom.elementClose("h4");

            (function() {
                var _$_inst_$_ = _libfjs_mod_.default.build({
                    "classFactory": _test_confirm_dialog.default,
                    "tag": "div",
                    "alias": "test-confirm-dialog",
                    "target": "",
                    "hostVars": {},
                    "staticVars": {
                        "key:id": "tmp_key_inst_custom_compBUKPihW0XNrVR9rbAiHdG_",
                        "is": "test-confirm-dialog"
                    }
                });

                _libfjs_mod_.default.reDraw.call(_$_inst_$_);

            })();

            (function() {
                var _$_inst_$_ = _libfjs_mod_.default.build({
                    "classFactory": _block_code.default,
                    "tag": "div",
                    "alias": "block-code",
                    "target": "",
                    "hostVars": {},
                    "staticVars": {
                        "src": "src/test/apps/test-confirm-dialog.pug",
                        "language": "pug",
                        "key:id": "tmp_key_inst_custom_compWwUVOXzHzb3TtG1K66SBXV",
                        "is": "block-code"
                    }
                });

                _libfjs_mod_.default.reDraw.call(_$_inst_$_);

            })();

            _idom.elementClose("div");

            _idom.elementOpen("h3", null, [""], "");

            _idom.text("Pagination Box");

            _idom.elementOpen("h4", null, [""], "");

            _idom.text("A pagination ");

            _idom.elementClose("h4");

            _idom.elementClose("h3");

            _idom.elementOpen("div", null, ["class", "bs-example"], "");

            _idom.elementOpen("h4", null, [""], "");

            _idom.text("Example");

            _idom.elementClose("h4");

            (function() {
                var _$_inst_$_ = _libfjs_mod_.default.build({
                    "classFactory": _test_pagination_box.default,
                    "tag": "div",
                    "alias": "test-pagination-box",
                    "target": "",
                    "hostVars": {},
                    "staticVars": {
                        "key:id": "tmp_key_inst_custom_compnLKGifxS3FLSVpvAkJLGlA",
                        "is": "test-pagination-box"
                    }
                });

                _libfjs_mod_.default.reDraw.call(_$_inst_$_);

            })();

            (function() {
                var _$_inst_$_ = _libfjs_mod_.default.build({
                    "classFactory": _block_code.default,
                    "tag": "div",
                    "alias": "block-code",
                    "target": "",
                    "hostVars": {},
                    "staticVars": {
                        "src": "src/test/apps/test-pagination-box.pug",
                        "language": "pug",
                        "key:id": "tmp_key_inst_custom_compxeJL692ZenK_ix1RmT2zIV",
                        "is": "block-code"
                    }
                });

                _libfjs_mod_.default.reDraw.call(_$_inst_$_);

            })();

            _idom.elementClose("div");

            _idom.elementOpen("h3", null, [""], "");

            _idom.text("Date Picker");

            _idom.elementOpen("h4", null, [""], "");

            _idom.text("A Date calendar");

            _idom.elementClose("h4");

            _idom.elementClose("h3");

            _idom.elementOpen("div", null, ["class", "bs-example"], "");

            _idom.elementOpen("h4", null, [""], "");

            _idom.text("Example");

            _idom.elementClose("h4");

            (function() {
                var _$_inst_$_ = _libfjs_mod_.default.build({
                    "classFactory": _test_date_picker.default,
                    "tag": "div",
                    "alias": "test-date-picker",
                    "target": "",
                    "hostVars": {},
                    "staticVars": {
                        "key:id": "tmp_key_inst_custom_comphfN27TG_ilNlFFTtpPkBlV",
                        "is": "test-date-picker"
                    }
                });

                _libfjs_mod_.default.reDraw.call(_$_inst_$_);

            })();

            (function() {
                var _$_inst_$_ = _libfjs_mod_.default.build({
                    "classFactory": _block_code.default,
                    "tag": "div",
                    "alias": "block-code",
                    "target": "",
                    "hostVars": {},
                    "staticVars": {
                        "src": "src/test/apps/test-date-picker.pug",
                        "language": "pug",
                        "key:id": "tmp_key_inst_custom_compOrxJLct4kkppinwNHnWlvt",
                        "is": "block-code"
                    }
                });

                _libfjs_mod_.default.reDraw.call(_$_inst_$_);

            })();

            _idom.elementClose("div");

            _idom.elementOpen("h3", null, [""], "");

            _idom.text("Select Box");

            _idom.elementOpen("h4", null, [""], "");

            _idom.text("A Select Box");

            _idom.elementClose("h4");

            _idom.elementClose("h3");

            _idom.elementOpen("div", null, ["class", "bs-example"], "");

            _idom.elementOpen("h4", null, [""], "");

            _idom.text("Example");

            _idom.elementClose("h4");

            (function() {
                var _$_inst_$_ = _libfjs_mod_.default.build({
                    "classFactory": _test_select_box.default,
                    "tag": "div",
                    "alias": "test-select-box",
                    "target": "",
                    "hostVars": {},
                    "staticVars": {
                        "key:id": "tmp_key_inst_custom_comptZi6Rve6EBkoCF7aG7ad02",
                        "is": "test-select-box"
                    }
                });

                _libfjs_mod_.default.reDraw.call(_$_inst_$_);

            })();

            (function() {
                var _$_inst_$_ = _libfjs_mod_.default.build({
                    "classFactory": _block_code.default,
                    "tag": "div",
                    "alias": "block-code",
                    "target": "",
                    "hostVars": {},
                    "staticVars": {
                        "src": "src/test/apps/test-select-box.pug",
                        "language": "pug",
                        "key:id": "tmp_key_inst_custom_compWvk_zMFiJib6zIxZwVXuKj",
                        "is": "block-code"
                    }
                });

                _libfjs_mod_.default.reDraw.call(_$_inst_$_);

            })();

            (function() {
                var _$_inst_$_ = _libfjs_mod_.default.build({
                    "classFactory": _block_code.default,
                    "tag": "div",
                    "alias": "block-code",
                    "target": "",
                    "hostVars": {},
                    "staticVars": {
                        "src": "src/test/apps/test-select-box.ts",
                        "language": "typescript",
                        "key:id": "tmp_key_inst_custom_comptcrZnlNAsfEisZuSjJrTiX",
                        "is": "block-code"
                    }
                });

                _libfjs_mod_.default.reDraw.call(_$_inst_$_);

            })();

            _idom.elementClose("div");

            _idom.elementClose("div");
        };
        return _clazz_sub_HtR0v_btS0NKl7ArDhCPUi_tmp;
    })(function() {})
});