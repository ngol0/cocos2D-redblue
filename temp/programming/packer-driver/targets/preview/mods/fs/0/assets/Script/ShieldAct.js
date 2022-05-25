System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Player, _dec, _class, _temp, _crd, ccclass, property, ShieldAct;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfPlayer(extras) {
    _reporterNs.report("Player", "./Player", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }, function (_unresolved_2) {
      Player = _unresolved_2.Player;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "6e58b8VxyRCH4BR3VqOz0XM", "ShieldAct", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("ShieldAct", ShieldAct = (_dec = ccclass('ShieldAct'), _dec(_class = (_temp = class ShieldAct extends Component {
        constructor() {
          super(...arguments);

          _defineProperty(this, "curActiveTime", 0);

          _defineProperty(this, "activeTime", 5);
        }

        update(deltaTime) {
          if (this.node.parent.getComponent(_crd && Player === void 0 ? (_reportPossibleCrUseOfPlayer({
            error: Error()
          }), Player) : Player).shieldActive) {
            this.curActiveTime += deltaTime;

            if (this.curActiveTime > this.activeTime) {
              this.node.active = false;
              this.node.parent.getComponent(_crd && Player === void 0 ? (_reportPossibleCrUseOfPlayer({
                error: Error()
              }), Player) : Player).SetNonActiveShield();
              this.curActiveTime = 0;
            }
          }
        }

        SetActiveShield() {
          this.node.active = true;
          this.node.parent.getComponent(_crd && Player === void 0 ? (_reportPossibleCrUseOfPlayer({
            error: Error()
          }), Player) : Player).SetActiveShield();
        }

      }, _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ShieldAct.js.map