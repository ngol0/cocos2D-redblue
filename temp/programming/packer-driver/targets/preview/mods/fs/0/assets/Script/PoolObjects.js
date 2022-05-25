System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, InteractableObject, _dec, _class, _temp, _crd, ccclass, property, PoolObjects;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfInteractableObject(extras) {
    _reporterNs.report("InteractableObject", "./InteractableObject", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      InteractableObject = _unresolved_2.InteractableObject;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a495fSYaV1IMYfq14OcwMl4", "PoolObjects", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("PoolObjects", PoolObjects = (_dec = ccclass('PoolObjects'), _dec(_class = (_temp = class PoolObjects extends (_crd && InteractableObject === void 0 ? (_reportPossibleCrUseOfInteractableObject({
        error: Error()
      }), InteractableObject) : InteractableObject) {
        constructor() {
          super(...arguments);

          _defineProperty(this, "_pool", void 0);

          _defineProperty(this, "_isHit", false);
        }

        SetPool(pool) {
          this._pool = pool;
        }

        OnObjectOut(object) {
          if (this._pool !== undefined) {
            this._pool.put(object);
          }
        }

        BackToPool() {
          this.OnObjectOut(this.node);
          this._isHit = false;
        }

      }, _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=PoolObjects.js.map