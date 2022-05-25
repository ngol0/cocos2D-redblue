System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Collider2D, Contact2DType, director, PoolObjects, _dec, _class, _crd, ccclass, property, BossBullet;

  function _reportPossibleCrUseOfPoolObjects(extras) {
    _reporterNs.report("PoolObjects", "./PoolObjects", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Collider2D = _cc.Collider2D;
      Contact2DType = _cc.Contact2DType;
      director = _cc.director;
    }, function (_unresolved_2) {
      PoolObjects = _unresolved_2.PoolObjects;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "32a78Dgi51FzaiSYNVg+3Og", "BossBullet", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("BossBullet", BossBullet = (_dec = ccclass('BossBullet'), _dec(_class = class BossBullet extends (_crd && PoolObjects === void 0 ? (_reportPossibleCrUseOfPoolObjects({
        error: Error()
      }), PoolObjects) : PoolObjects) {
        start() {
          //collider
          let collider = this.getComponent(Collider2D);

          if (collider) {
            collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
          }
        } //when bullet collides with enemies


        onBeginContact(selfCollider, otherCollider, contact) {
          if (otherCollider.tag == 5) {
            //destroy bullet
            director.loadScene('scene');
          }

          if (otherCollider.node.name == "OutOfBound") {
            this._isHit = true;
          }
        }

        update(deltaTime) {
          this.MoveWithSpeed(deltaTime, 400);

          if (this._isHit) {
            this.BackToPool();
          }
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=BossBullet.js.map