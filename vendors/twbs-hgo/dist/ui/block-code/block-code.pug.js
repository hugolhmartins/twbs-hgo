define(["exports", "incremental-dom", "ferrugemjs/component-factory", "highlight.js/lib/highlight", "twbs-hgo/block-code/languages/lang-pug", "twbs-hgo/block-code/languages/lang-xml", "twbs-hgo/block-code/languages/lang-typescript", "css-loader!highlight.js/styles/docco.css"], function(exports, _idom, _libfjs_mod_, _hljs, _lang_pug, _lang_xml, _lang_typescript) {
    var __mod__oMD__PghzBF7ZZU6mHT1Vs_tmp = "_tmp_constructor_no_view__mod__oMD__PghzBF7ZZU6mHT1Vs";
    exports.default = (function(super_clazz) {
        function _clazz_sub_hsAKxvkjkPFwue93AlPFOi_tmp() {
            super_clazz.call(this);
        };
        _clazz_sub_hsAKxvkjkPFwue93AlPFOi_tmp.prototype = Object.create(super_clazz.prototype);
        _clazz_sub_hsAKxvkjkPFwue93AlPFOi_tmp.prototype.constructor = _clazz_sub_hsAKxvkjkPFwue93AlPFOi_tmp;
        _clazz_sub_hsAKxvkjkPFwue93AlPFOi_tmp.prototype._$attrs$_ = {
            "name": "div",
            "static": ["class", "block-code"],
            "dinamic": "\"\""
        };
        _clazz_sub_hsAKxvkjkPFwue93AlPFOi_tmp.prototype.render = function($_this_$) {
            (function() {
                this._temp_uid = Math.ceil(Math.random() * 1000, 4);
            }.bind($_this_$))();

            _idom.elementOpen("pre", null, [""], "");

            _idom.elementOpen("code", null, ["class", "block-content hljs"], "id", ($_this_$._temp_uid));

            _idom.elementClose("code");

            _idom.elementClose("pre");

            (function() {
                _hljs.configure({
                    tabReplace: '  '
                });
                _hljs.registerLanguage("pug", _lang_pug);
                _hljs.registerLanguage("xml", _lang_xml);
                _hljs.registerLanguage("typescript", _lang_typescript);
                let block = document.getElementById(this._temp_uid);
                fetch(this.src)
                    .then(res => res.text())
                    .then(res_str => {
                        block.className += this.language;
                        block.textContent = res_str;
                        setTimeout(() => {
                            _hljs.highlightBlock(block, this.language);
                        }, 400);
                    });
            }.bind($_this_$))();
        };
        return _clazz_sub_hsAKxvkjkPFwue93AlPFOi_tmp;
    })(function() {})
});