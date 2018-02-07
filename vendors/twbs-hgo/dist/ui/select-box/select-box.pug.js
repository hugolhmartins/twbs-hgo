define(["exports", "incremental-dom", "ferrugemjs/component-factory", "./select-box", "jquery", "css-loader!./select-box.css"], function(exports, _idom, _libfjs_mod_, _select_box, jq) {
    var __select_box_tmp = Object.keys(_select_box)[0];
    exports.default = (function(super_clazz) {
        function _clazz_sub_zVhUGxwiUtWZ8dhKEKGlbL_tmp() {
            super_clazz.call(this);
        };
        _clazz_sub_zVhUGxwiUtWZ8dhKEKGlbL_tmp.prototype = Object.create(super_clazz.prototype);
        _clazz_sub_zVhUGxwiUtWZ8dhKEKGlbL_tmp.prototype.constructor = _clazz_sub_zVhUGxwiUtWZ8dhKEKGlbL_tmp;
        _clazz_sub_zVhUGxwiUtWZ8dhKEKGlbL_tmp.prototype._$attrs$_ = {
            "name": "div",
            "static": ["class", "input-group col-xs-24 select-box not-transformed"],
            "dinamic": "\"\""
        };
        _clazz_sub_zVhUGxwiUtWZ8dhKEKGlbL_tmp.prototype.render = function($_this_$) {
            _idom.elementOpen("input", null, ["class", "form-control", "type", "text", "index", "-1"], "placeholder", ($_this_$.placeholder), "onkeyup", ($_this_$.setDescFilter.bind($_this_$)), "onfocus", ($_this_$.refresh.bind($_this_$, {
                isVisibleList: true
            })), "onblur", ($_this_$.refresh.bind($_this_$, {
                isVisibleList: false
            })), "value", ($_this_$.getSelectedDesc()));

            _idom.elementClose("input");

            _idom.elementOpen("span", null, ["class", "input-group-addon", "style", "border-left:0px;"], "onclick", ($_this_$.refresh.bind($_this_$, {
                isVisibleList: !$_this_$.isVisibleList
            })));

            _idom.elementOpen("i", null, [""], "class", ('glyphicon glyphicon-menu-' + ($_this_$.isVisibleList ? 'up' : 'down')));

            _idom.elementClose("i");

            _idom.elementClose("span");

            if ($_this_$.isVisibleList) {

                _idom.elementOpen("ul", null, ["class", "dropdown-list-select-box"], "onmousedown", ($_this_$.clickListHandler.bind($_this_$)));

                $_this_$.data.forEach(function(opt, $indx) {
                    _idom.elementOpen("li", null, [""], "class", ($indx == $_this_$.arrowIndex ? 'is-selected-index' : ''), "data-indx", ($indx));

                    _idom.elementOpen("span", null, [""], "data-indx", ($indx));

                    _idom.text("" + (opt[$_this_$.descField]) + "");

                    _idom.elementClose("span");

                    _idom.elementClose("li");
                });

                _idom.elementClose("ul");
            };

            if (!$_this_$.loaded) {

                (function() {
                    this.loaded = true;
                    window.setTimeout(function() {
                        this.setIndexFromValue();
                        this.refresh();
                    }.bind(this), 100);
                }.bind($_this_$))();
            };
        };
        return _clazz_sub_zVhUGxwiUtWZ8dhKEKGlbL_tmp;
    })(_select_box[__select_box_tmp]);
});