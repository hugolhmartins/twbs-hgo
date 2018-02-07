define(["exports", "incremental-dom", "ferrugemjs/component-factory", "./date-picker", "jquery", "moment", "bootstrap-datepicker/dist/js/bootstrap-datepicker.min", "css-loader!bootstrap-datepicker/dist/css/bootstrap-datepicker3.min.css"], function(exports, _idom, _libfjs_mod_, _date_picker, jq, moment, _twbs_date_picker) {
    var __date_picker_tmp = Object.keys(_date_picker)[0];
    exports.default = (function(super_clazz) {
        function _clazz_sub_pzU1GhWzf7X6fztrh2R3xa_tmp() {
            super_clazz.call(this);
        };
        _clazz_sub_pzU1GhWzf7X6fztrh2R3xa_tmp.prototype = Object.create(super_clazz.prototype);
        _clazz_sub_pzU1GhWzf7X6fztrh2R3xa_tmp.prototype.constructor = _clazz_sub_pzU1GhWzf7X6fztrh2R3xa_tmp;
        _clazz_sub_pzU1GhWzf7X6fztrh2R3xa_tmp.prototype._$attrs$_ = {
            "name": "div",
            "static": ["class", "input-group date date-picker col-xs-24"],
            "dinamic": "\"\""
        };
        _clazz_sub_pzU1GhWzf7X6fztrh2R3xa_tmp.prototype.render = function($_this_$) {
            _idom.elementOpen("input", null, ["class", "form-control", "type", "text"], "id", ($_this_$._uid), "placeholder", ($_this_$.placeholder), "onchange", ($_this_$.changeDate.bind($_this_$)), "value", ($_this_$.value ? moment($_this_$.value).format($_this_$.format.toUpperCase()) : ''));

            _idom.elementClose("input");

            _idom.elementOpen("span", null, ["class", "input-group-addon"], "");

            _idom.elementOpen("i", null, ["class", "glyphicon glyphicon-calendar"], "");

            _idom.elementClose("i");

            _idom.elementClose("span");

            (function() {
                this.loaded = true;
                window.setTimeout(function() {
                    jq('#' + this._uid)
                        .parent(".input-group.date")
                        .datepicker({
                            autoclose: true,
                            format: this.format
                        });
                }.bind(this), 200)
            }.bind($_this_$))();
        };
        return _clazz_sub_pzU1GhWzf7X6fztrh2R3xa_tmp;
    })(_date_picker[__date_picker_tmp]);
});