define(["exports", "incremental-dom", "ferrugemjs/component-factory", "./confirm-dialog", "jquery", "css-loader!./confirm-dialog.css"], function(exports, _idom, _libfjs_mod_, _confirm_dialog, _jq) {
    var __confirm_dialog_tmp = Object.keys(_confirm_dialog)[0];
    exports.default = (function(super_clazz) {
        function _clazz_sub_KNARsmZe9LBWkW2F8Um7HU_tmp() {
            super_clazz.call(this);
        };
        _clazz_sub_KNARsmZe9LBWkW2F8Um7HU_tmp.prototype = Object.create(super_clazz.prototype);
        _clazz_sub_KNARsmZe9LBWkW2F8Um7HU_tmp.prototype.constructor = _clazz_sub_KNARsmZe9LBWkW2F8Um7HU_tmp;
        _clazz_sub_KNARsmZe9LBWkW2F8Um7HU_tmp.prototype._$attrs$_ = {
            "name": "div",
            "static": [],
            "dinamic": "\"\""
        };
        _clazz_sub_KNARsmZe9LBWkW2F8Um7HU_tmp.prototype.render = function($_this_$) {
            (function() {
                this.typeIcon = 'warning sign';
                this.type = this.type || 'warning';
                this.colorType = "warning";
                if (this.type === 'info') {
                    this.typeIcon = 'info circle';
                    this.colorType = "primary";
                } else if (this.type === 'error') {
                    this.typeIcon = 'bug';
                    this.colorType = "danger";
                } else if (this.type === 'confirm') {
                    this.typeIcon = 'Help Circle';
                    this.colorType = "success";
                }
            }.bind($_this_$))();

            _idom.elementOpen("div", null, ["class", "modal fade confirm-dialog", "tabindex", "-1", "role", "dialog"], "");

            _idom.elementOpen("div", null, ["class", "modal-dialog", "style", "vertical-align: middle;", "role", "document"], "");

            _idom.elementOpen("div", null, ["class", "modal-content"], "");

            _idom.elementOpen("div", null, [""], "class", ('modal-header bg-' + $_this_$.colorType));

            _idom.elementOpen("button", null, ["class", "close", "type", "button", "data-dismiss", "modal", "aria-label", "Close"], "");

            _idom.elementOpen("span", null, ["aria-hidden", "true"], "");

            _idom.text("×");

            _idom.elementClose("span");

            _idom.elementClose("button");

            _idom.elementOpen("h4", null, ["class", "modal-title"], "");

            _idom.text("" + (($_this_$.title ? $_this_$.title : ' ')) + "");

            _idom.elementClose("h4");

            _idom.elementClose("div");

            _idom.elementOpen("div", null, ["class", "modal-body"], "");

            _idom.elementOpen("p", null, [""], "");

            _libfjs_mod_.default.content.call($_this_$);

            _idom.elementClose("p");

            _idom.elementClose("div");

            _idom.elementOpen("div", null, ["class", "modal-footer"], "");

            if (['warning', 'confirm'].indexOf($_this_$.type) > -1) {

                _idom.elementOpen("button", null, ["class", "btn btn-default btn-sm", "type", "button", "data-dismiss", "modal"], "");

                _idom.text("Cancelar");

                _idom.elementClose("button");
            };

            if ($_this_$.onConfirm.hasSubscribers()) {

                _idom.elementOpen("button", null, ["class", "btn btn-warning btn-sm", "data-dismiss", "modal", "aria-label", "Close"], "onclick", ($_this_$.confirm.bind($_this_$)));

                _idom.text("Sim ");

                _idom.elementOpen("i", null, ["class", "glyphicon glyphicon-ok"], "");

                _idom.elementClose("i");

                _idom.elementClose("button");

            } else if ($_this_$.processUrl) {

                _idom.elementOpen("a", null, ["class", "btn btn-warning btn-sm"], "href", ($_this_$.processUrl));

                _idom.text("Sim ");

                _idom.elementOpen("i", null, ["class", "glyphicon glyphicon-ok"], "");

                _idom.elementClose("i");

                _idom.elementClose("a");

            } else {

                _idom.elementOpen("button", null, ["class", "btn btn-warning btn-sm", "data-dismiss", "modal", "aria-label", "Close"], "");

                _idom.text("Sim ");

                _idom.elementOpen("i", null, ["class", "glyphicon glyphicon-ok"], "");

                _idom.elementClose("i");

                _idom.elementClose("button");
            };

            _idom.elementClose("div");

            _idom.elementClose("div");

            _idom.elementClose("div");

            _idom.elementClose("div");

            (function() {
                _jq('.confirm-dialog:first').modal({
                    show: true,
                    backdrop: true
                });
            }.bind($_this_$))();
        };
        return _clazz_sub_KNARsmZe9LBWkW2F8Um7HU_tmp;
    })(_confirm_dialog[__confirm_dialog_tmp]);
});