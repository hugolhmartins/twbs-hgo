define(["require", "exports", "incremental-dom", "ferrugemjs/nodes-watched", "ferrugemjs/nodes-action"], function (require, exports, _IDOM, nodes_watched_1, nodes_action_1) {
    "use strict";
    var uid_generated = new Date().getTime() + 1298;
    _IDOM.notifications.nodesDeleted = function (nodes) {
        nodes.forEach(function (node) { return nodes_action_1.detacheNode(node); });
    };
    _IDOM.notifications.nodesCreated = function (nodes) {
        nodes.forEach(function (node) { return nodes_action_1.attacheNode(node); });
    };
    _IDOM.attributes.value = function (el, name, value) {
        el.value = value === null || typeof (value) === 'undefined' ? '' : value;
    };
    _IDOM.attributes.checked = function (el, name, value) {
        el.checked = !!value;
    };
    var ComponentFactory = (function () {
        function ComponentFactory() {
            this.config = { templateExtension: ".html" };
        }
        ComponentFactory.prototype.build = function (config) {
            var _key = config.target;
            if (config.hostVars && config.hostVars["key:id"]) {
                _key = config.hostVars["key:id"];
                delete config.hostVars["key:id"];
            }
            else if (config.staticVars && config.staticVars["key:id"]) {
                _key = config.staticVars["key:id"];
                delete config.staticVars["key:id"];
            }
            if (config.hostVars && config.hostVars["prop:values"]) {
                var _prop_values = config.hostVars["prop:values"];
                delete config.hostVars["prop:values"];
                for (var keyp in _prop_values) {
                    config.hostVars[keyp] = _prop_values[keyp];
                }
            }
            else if (config.staticVars && config.staticVars["prop:values"]) {
                delete config.staticVars["prop:values"];
            }
            if (!config.classFactory.prototype.refresh) {
                config.classFactory.prototype.refresh = ComponentFactory.prototype.refresh;
            }
            if (_key && nodes_watched_1.default[_key]) {
                if (config.hostVars) {
                    for (var _prop_ in config.hostVars) {
                        if (_prop_.indexOf(".") > -1) {
                            delete config.hostVars[_prop_];
                        }
                    }
                }
                this.changeAttrs.call(nodes_watched_1.default[_key].inst, config.hostVars);
                return nodes_watched_1.default[_key].inst;
            }
            nodes_watched_1.default[_key] = { inst: new config.classFactory() };
            nodes_watched_1.default[_key].target = config.target;
            if (!nodes_watched_1.default[_key].inst._capture$KeyId) {
                (function (p_key) {
                    nodes_watched_1.default[_key].inst._capture$KeyId = function () {
                        return p_key;
                    };
                }(_key));
            }
            nodes_watched_1.default[_key].alias = config.alias;
            nodes_watched_1.default[_key].tag = config.tag || "div";
            nodes_watched_1.default[_key].tag = nodes_watched_1.default[_key].inst["_$attrs$_"] ? nodes_watched_1.default[_key].inst["_$attrs$_"]["name"] : nodes_watched_1.default[_key].tag;
            this.changeAttrs.call(nodes_watched_1.default[_key].inst, config.hostVars);
            this.changeAttrs.call(nodes_watched_1.default[_key].inst, config.staticVars);
            if (nodes_watched_1.default[_key].inst["_$attrs$_"]) {
                nodes_watched_1.default[_key].extHostVars = nodes_watched_1.default[_key].inst["_$attrs$_"]["dinamic"];
                nodes_watched_1.default[_key].extStaticVars = Object.assign([], nodes_watched_1.default[_key].inst["_$attrs$_"]["static"]);
            }
            return nodes_watched_1.default[_key].inst;
        };
        ComponentFactory.prototype.content = function ($content$) {
            if ($content$) {
                this._$content$_ = $content$;
            }
            else if (this._$content$_) {
                this._$content$_();
            }
            return this;
        };
        ComponentFactory.prototype.changeAttrs = function (attrs_vars, isStatics) {
            if (attrs_vars) {
                var forbiddenAttrList = ["key-id", "is"];
                for (var propOrign in attrs_vars) {
                    if (forbiddenAttrList.indexOf(propOrign) < 0) {
                        var notAccepted = isStatics && (propOrign === "id" || propOrign === "is");
                        if (!notAccepted) {
                            var prop = propOrign;
                            if (prop.indexOf("-") > -1) {
                                prop = propOrign.toLowerCase().replace(/-(.)/g, function (match, group1) {
                                    return group1.toUpperCase();
                                });
                            }
                            var newValue = attrs_vars[propOrign];
                            var regx = /(\w*)+\.if$/g;
                            if (regx.test(prop)) {
                                var attrcondi = prop.replace(".if", "");
                                if (newValue) {
                                    this[attrcondi] = attrcondi;
                                }
                                else {
                                    delete this[attrcondi];
                                }
                            }
                            else if (prop.indexOf(".") > -1) {
                                var prop_splited = prop.split(".");
                                this[prop_splited[0]][prop_splited[1]](newValue);
                            }
                            else {
                                var oldValue = this[prop];
                                this[prop] = newValue;
                                if (this.attributeChangedCallback) {
                                    this.attributeChangedCallback(prop, oldValue, newValue);
                                }
                            }
                        }
                    }
                }
            }
        };
        ComponentFactory.prototype.reDraw = function () {
            var _$key$_ = this._capture$KeyId ? this._capture$KeyId() : "";
            var _inst_ = (nodes_watched_1.default[_$key$_] || { inst: this, extStaticVars: [], extHostVars: "" });
            _inst_.extHostVars = _inst_.extHostVars || "";
            _inst_.extStaticVars = _inst_.extStaticVars || [];
            _inst_.target = _inst_.target || 'uid_' + (uid_generated++) + '_provided';
            if (_inst_.extStaticVars.indexOf('id') < 0) {
                _inst_.extStaticVars.push('id', _inst_.target);
            }
            else {
                _inst_.target = _inst_.extStaticVars[_inst_.extStaticVars.indexOf('id') + 1];
            }
            if (_inst_.extStaticVars.indexOf('is') < 0 && _inst_.alias) {
                _inst_.extStaticVars.push('is', _inst_.alias);
            }
            if (_$key$_) {
                _inst_.extStaticVars.push('key-id', _$key$_);
            }
            _IDOM.elementOpen.apply(_IDOM, [_inst_.tag, _$key$_, _inst_.extStaticVars].concat(new Function('$_this_$', 'return [' + _inst_.extHostVars + ']')(_inst_.inst)));
            _inst_.inst.render(_inst_.inst);
            _IDOM.elementClose(_inst_.tag);
        };
        ComponentFactory.prototype.refresh = function (props) {
            var _$key$_ = this._capture$KeyId ? this._capture$KeyId() : "";
            var _inst_ = nodes_watched_1.default[_$key$_] || { inst: this };
            var shouldUpdate = true;
            if (_inst_.inst.shouldUpdateCallback) {
                shouldUpdate = _inst_.inst.shouldUpdateCallback(Object.assign({}, _inst_.inst, props));
            }
            if (shouldUpdate) {
                if (props && typeof props === "function") {
                    ComponentFactory.prototype.changeAttrs.apply(_inst_.inst, [
                        props(_inst_.inst)
                    ]);
                }
                else if (props) {
                    ComponentFactory.prototype.changeAttrs.apply(_inst_.inst, [props]);
                }
                if ((_inst_.loaded || _inst_.alias === "compose-view") && _inst_.target && document.getElementById(_inst_.target)) {
                    var elementDom_1 = document.getElementById(_inst_.target);
                    if (_inst_.extHostVars && _inst_.extHostVars !== '""') {
                        var converted_to_array_1 = new Function('$_this_$', 'return [' + _inst_.extHostVars + ']')(_inst_.inst);
                        converted_to_array_1.forEach(function (attrkey, $indx) {
                            var skypeZero = $indx || 2;
                            if (skypeZero % 2 === 0) {
                                elementDom_1.setAttribute(attrkey, converted_to_array_1[$indx + 1]);
                            }
                        });
                    }
                    if (_inst_["is"]) {
                        elementDom_1.setAttribute("is", _inst_["is"]);
                    }
                    _IDOM.patch(elementDom_1, _inst_.inst.render, _inst_.inst);
                }
            }
        };
        ComponentFactory.prototype.compose = function (path, target, host_vars, static_vars, contentfn) {
            var _this = this;
            var handlerLoad = function (mod) {
                var _inst_ = _this.build({
                    classFactory: mod.default,
                    hostVars: host_vars,
                    staticVars: static_vars,
                    target: target,
                    alias: "compose-view",
                    tag: "div"
                });
                var _$key$_ = _inst_._capture$KeyId ? _inst_._capture$KeyId() : "";
                nodes_watched_1.default[_$key$_]["is"] = path.substring(path.lastIndexOf("/") + 1, path.length);
                ComponentFactory.prototype.content.call(nodes_watched_1.default[_$key$_], contentfn);
                _inst_.refresh();
                if (_inst_.connectedCallback && (!nodes_watched_1.default[_$key$_].loaded)) {
                    _inst_.connectedCallback();
                }
                if (_$key$_ && nodes_watched_1.default[_$key$_]) {
                    nodes_watched_1.default[_$key$_].loaded = true;
                }
            };
            if (typeof __webpack_require__ === 'function') {
                require([("root_app/" + path + this.config.templateExtension)], handlerLoad.bind(this));
            }
            else {
                require([("" + path + this.config.templateExtension)], handlerLoad.bind(this));
            }
        };
        return ComponentFactory;
    }());
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = new ComponentFactory();
});
