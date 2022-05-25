System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, PoolObjects, _dec, _class, _crd, ccclass, property, PlayerEnemy;

  function _reportPossibleCrUseOfPoolObjects(extras) {
    _reporterNs.report("PoolObjects", "./PoolObjects", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      PoolObjects = _unresolved_2.PoolObjects;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "43b84eG78NA7JcOMCeL0m99", "PlayerEnemy", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("PlayerEnemy", PlayerEnemy = (_dec = ccclass('PlayerEnemy'), _dec(_class = class PlayerEnemy extends (_crd && PoolObjects === void 0 ? (_reportPossibleCrUseOfPoolObjects({
        error: Error()
      }), PoolObjects) : PoolObjects) {
        onBeginContact(selfCollider, otherCollider, contact) {
          if (otherCollider.tag == 5 || otherCollider.node.name == "Bullet" || otherCollider.node.name == "Bomb") {
            //kill enemy
            this._isHit = true;
          }
        }

        update(deltaTime) {
          this.Moving(deltaTime);
          if (this._isHit) //if enemy node is out of bound/hit by bullet/hit by bomb - return to pool and set the position back to 0,0,0
            this.BackToPool();
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=PlayerEnemy.js.map