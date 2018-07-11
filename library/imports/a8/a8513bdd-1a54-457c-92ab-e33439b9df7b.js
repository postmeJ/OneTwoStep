"use strict";
cc._RF.push(module, 'a8513vdGlRFfJKr4zQ5ud97', 'uiMaskLayout');
// common/script/uiMaskLayout.js

"use strict";

var uiPanel = require("uiPanel");
cc.Class({
    extends: uiPanel,
    // LIFE-CYCLE CALLBACKS:
    start: function start() {
        clientEvent.on(clientEvent.eventType.openUI, this.uiOperateCallBack, this);
        clientEvent.on(clientEvent.eventType.closeUI, this.uiOperateCallBack, this);
        this.isUseMask = false;
        this.node.active = false;
    },


    uiOperateCallBack: function uiOperateCallBack() {
        // 最后一个需要使用mask的panel
        var lastMaskIndex = -1;
        for (var i = uiFunc.uiList.length - 1; i >= 0; i--) {
            var ui = uiFunc.uiList[i];
            var panel = ui.getComponent("uiPanel");
            if (panel && panel.isUseMask) {
                lastMaskIndex = i;
                break;
            }
        }
        if (lastMaskIndex >= 0) {
            this.node.active = true;
            for (var j = lastMaskIndex; j < uiFunc.uiList.length; j++) {
                var targetUI = uiFunc.uiList[j];
                if (targetUI) {
                    this.node.setSiblingIndex(Number.MAX_SAFE_INTEGER);
                    targetUI.setSiblingIndex(Number.MAX_SAFE_INTEGER);
                } else {
                    console.log("current show ui is null!");
                }
            }
        } else {
            this.node.active = false;
            return;
        }
    },

    refresh: function refresh() {
        // 最后一个需要使用mask的panel
        var lastMaskIndex = -1;
        for (var i = uiFunc.uiList.length - 1; i >= 0; i--) {
            var ui = uiFunc.uiList[i];
            var panel = ui.getComponent("uiPanel");
            if (panel.isUseMask) {
                lastMaskIndex = i;
                break;
            }
        }
        if (lastMaskIndex >= 0) {
            this.node.active = true;
            for (var j = lastMaskIndex; j < uiFunc.uiList.length; j++) {
                var targetUI = uiFunc.uiList[j];
                if (targetUI) {
                    this.node.setSiblingIndex(Number.MAX_SAFE_INTEGER);
                    targetUI.setSiblingIndex(Number.MAX_SAFE_INTEGER);
                } else {
                    console.log("current show ui is null!");
                }
            }
        } else {
            this.node.active = false;
            return;
        }
    },

    onDestroy: function onDestroy() {
        clientEvent.off(clientEvent.eventType.openUI, this.uiOperateCallBack, this);
        clientEvent.off(clientEvent.eventType.closeUI, this.uiOperateCallBack, this);
    }
});

cc._RF.pop();