define(["require", "exports", "ferrugemjs/nodes-watched"], function (require, exports, nodes_watched_1) {
    "use strict";
    exports.detacheNode = function (node) {
        if (node.children && node.children.length) {
            var node_array = Array.prototype.slice.call(node.children);
            node_array.forEach(function (subnode) { return exports.detacheNode(subnode); });
        }
        ;
        var key_id = node.getAttribute ? node.getAttribute("key-id") : "";
        var inst_captured = nodes_watched_1.default[key_id];
        if (key_id && inst_captured && inst_captured.inst.disconnectedCallback) {
            inst_captured.inst.disconnectedCallback();
        }
        if (key_id && inst_captured) {
            inst_captured.inst._capture$KeyId = null;
            delete inst_captured.inst._capture$KeyId;
            inst_captured.loaded = false;
            inst_captured.inst = null;
            inst_captured = null;
            delete nodes_watched_1.default[key_id];
        }
        ;
    };
    exports.attacheNode = function (node) {
        var key_id = node.getAttribute ? node.getAttribute("key-id") : "";
        var inst_captured = nodes_watched_1.default[key_id];
        if (key_id && inst_captured) {
            if (inst_captured.inst.connectedCallback && (!inst_captured.loaded)) {
                inst_captured.inst.connectedCallback();
            }
            inst_captured.loaded = true;
        }
    };
});
