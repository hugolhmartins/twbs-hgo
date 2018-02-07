define(["require", "exports", "incremental-dom", "ferrugemjs/component-factory"], function (require, exports, _IDOM, component_factory_1) {
    "use strict";
    var PlatformBootstrap = (function () {
        function PlatformBootstrap() {
        }
        PlatformBootstrap.prototype.bootstrap = function (pmodule, option) {
            this._module = pmodule;
            component_factory_1.default.config.templateExtension = option && option.templateExtension ? option.templateExtension : ".html";
            return this;
        };
        PlatformBootstrap.prototype.at = function (domRender) {
            var app_uid = domRender.getAttribute("id");
            if (!app_uid) {
                app_uid = "uid_" + new Date().getTime();
                domRender.setAttribute("id", app_uid);
            }
            ;
            var _tmp_inst = component_factory_1.default.build({
                classFactory: this._module.default,
                staticVars: {
                    "key:id": app_uid
                },
                hostVars: {},
                tag: "div",
                alias: "init-app-tag"
            });
            _IDOM.patch(document.getElementById(app_uid), component_factory_1.default.reDraw.bind(_tmp_inst), _tmp_inst);
            delete this._module;
        };
        return PlatformBootstrap;
    }());
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = new PlatformBootstrap();
});
