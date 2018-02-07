define(["require", "exports", "ferrugemjs/platform"], function (require, exports, platform_1) {
    "use strict";
    var app_html_s = document.querySelectorAll('[app]');
    var app_html;
    if (app_html_s.length === 0) {
        app_html = document.getElementsByTagName('body')[0];
    }
    else {
        app_html = app_html_s[0];
    }
    ;
    app_html_s = null;
    var app_url = app_html.getAttribute("app") || "app";
    var templateExtension = app_html.getAttribute("template-extension") || ".html";
    if (typeof __webpack_require__ === 'function') {
        require([("root_app/" + app_url + templateExtension)], function (_mod_init_app) {
            platform_1.default
                .bootstrap(_mod_init_app, { templateExtension: templateExtension })
                .at(app_html);
        });
    }
    else {
        require([("" + app_url + templateExtension)], function (_mod_init_app) {
            platform_1.default
                .bootstrap(_mod_init_app, { templateExtension: templateExtension })
                .at(app_html);
        });
    }
});
