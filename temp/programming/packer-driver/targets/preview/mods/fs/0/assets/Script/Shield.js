System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, ActiveIcons, _dec, _class, _class2, _temp, _crd, ccclass, property, Shield;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfActiveIcons(extras) {
    _reporterNs.report("ActiveIcons", "./ActiveIcons", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      ActiveIcons = _unresolved_2.ActiveIcons;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "62732ufqDRBp7oyPy1DHNaE", "Shield", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Shield", Shield = (_dec = ccclass('Shield'), _dec(_class = (_temp = _class2 = class Shield extends (_crd && ActiveIcons === void 0 ? (_reportPossibleCrUseOfActiveIcons({
        error: Error()
      }), ActiveIcons) : ActiveIcons) {
        start() {
          Shield.Instance = this;
        } // update (deltaTime: number) {
        //     if (PlayerController.Instance.shieldActive)
        //     {
        //         this.curActiveTime += deltaTime;
        //         if (this.curActiveTime > this.activeTime)
        //         {
        //             this.node.active = false;
        //             PlayerController.Instance.SetNonActiveShield();
        //             this.curActiveTime = 0;
        //             this.activeTime = this._originalActiveTime;
        //         }
        //     }
        // }
        // SetNonActiveShield()
        // {
        //     PlayerController.Instance.SetNonActiveShield();
        // }


      }, _defineProperty(_class2, "Instance", null), _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=Shield.js.map