System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, PoolObjects, _dec, _class, _crd, ccclass, property, Enemy;

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

      _cclegacy._RF.push({}, "fc8efczabVGWazb4VWioF3T", "Enemy", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Enemy", Enemy = (_dec = ccclass('Enemy'), _dec(_class = class Enemy extends (_crd && PoolObjects === void 0 ? (_reportPossibleCrUseOfPoolObjects({
        error: Error()
      }), PoolObjects) : PoolObjects) {
        //when enemy collides with bullets or bomb
        onBeginContact(selfCollider, otherCollider, contact) {
          if (otherCollider.node.name == "Bullet" || otherCollider.node.name == "Bomb") {
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
//# sourceMappingURL=Enemy.js.map