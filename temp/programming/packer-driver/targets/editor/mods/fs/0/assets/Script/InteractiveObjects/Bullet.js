System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, PoolObjects, _dec, _class, _temp, _crd, ccclass, property, Bullet;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

      _cclegacy._RF.push({}, "22fc6X8mX9KOLcMEK6dGgbX", "Bullet", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Bullet", Bullet = (_dec = ccclass('Bullet'), _dec(_class = (_temp = class Bullet extends (_crd && PoolObjects === void 0 ? (_reportPossibleCrUseOfPoolObjects({
        error: Error()
      }), PoolObjects) : PoolObjects) {
        constructor(...args) {
          super(...args);

          _defineProperty(this, "_height", 900);
        }

        //when bullet collides with enemies
        onBeginContact(selfCollider, otherCollider, contact) {
          if (otherCollider.tag == 2) {
            //destroy bullet
            this._isHit = true;
          }
        }

        update(deltaTime) {
          // let curPos = new Vec3 (this.node.position.x, this.node.position.y, this.node.position.z);
          // curPos.y += this.speed * deltaTime;
          this.Moving(deltaTime);

          if (this._currentPos.y > this._height || this._isHit) {
            this.BackToPool();
          } //this.node.position = curPos;

        }

      }, _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=Bullet.js.map