System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Prefab, Collider2D, Contact2DType, instantiate, find, Vec3, Explosion, PoolObjects, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _temp, _crd, ccclass, property, BombIcon;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfExplosion(extras) {
    _reporterNs.report("Explosion", "./Explosion", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPoolObjects(extras) {
    _reporterNs.report("PoolObjects", "./PoolObjects", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Prefab = _cc.Prefab;
      Collider2D = _cc.Collider2D;
      Contact2DType = _cc.Contact2DType;
      instantiate = _cc.instantiate;
      find = _cc.find;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      Explosion = _unresolved_2.Explosion;
    }, function (_unresolved_3) {
      PoolObjects = _unresolved_3.PoolObjects;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e0841dfzulCX74YV1BIa4w7", "BombIcon", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("BombIcon", BombIcon = (_dec = ccclass('BombIcon'), _dec2 = property({
        type: Prefab
      }), _dec3 = property({
        type: Prefab
      }), _dec(_class = (_class2 = (_temp = class BombIcon extends (_crd && PoolObjects === void 0 ? (_reportPossibleCrUseOfPoolObjects({
        error: Error()
      }), PoolObjects) : PoolObjects) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "bombSprites", _descriptor, this);

          _initializerDefineProperty(this, "explosionVFX", _descriptor2, this);

          _defineProperty(this, "isExploding", false);

          _defineProperty(this, "curPosOfBomb", new Vec3());

          _defineProperty(this, "bombObject", null);
        }

        start() {
          //collider
          let collider = this.getComponent(Collider2D);

          if (collider) {
            collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
          }
        }

        onBeginContact(selfCollider, otherCollider, contact) {
          if (otherCollider.tag == 5) {
            //spawn bomb
            this.initBombSprite();
            this.initExplosionVFX();
            (_crd && Explosion === void 0 ? (_reportPossibleCrUseOfExplosion({
              error: Error()
            }), Explosion) : Explosion).Instace.SetActiveDamage();
            this._isHit = true;
          } else if (otherCollider.tag == 4) {
            this._isHit = true;
          }
        }

        initBombSprite() {
          let bombObject = instantiate(this.bombSprites);
          var rootNode = find("Canvas");
          bombObject.parent = rootNode;
          bombObject.position = new Vec3(-50, -390, 0);
        }

        initExplosionVFX() {
          let explosionVFX = instantiate(this.explosionVFX);
          var rootNode = find("Canvas");
          explosionVFX.parent = rootNode;
          explosionVFX.position = new Vec3(-50, 400, 0);
        }

        update(deltaTime) {
          this.Moving(deltaTime);

          if (this._isHit) {
            this.BackToPool();
          }
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "bombSprites", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "explosionVFX", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=BombIcon.js.map