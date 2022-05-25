System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, ActiveIcons, _dec, _class, _class2, _temp, _crd, ccclass, property, Speed;

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

      _cclegacy._RF.push({}, "4d14e+EOR1KjI9LjroMj7FS", "Speed", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Speed", Speed = (_dec = ccclass('Speed'), _dec(_class = (_temp = _class2 = class Speed extends (_crd && ActiveIcons === void 0 ? (_reportPossibleCrUseOfActiveIcons({
        error: Error()
      }), ActiveIcons) : ActiveIcons) {
        start() {
          Speed.Instance = this;
        }

        SetNormalSpeed() {
          this.scheduleOnce(function () {}, this.activeTime);
        }

      }, _defineProperty(_class2, "Instance", null), _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=Speed.js.map