System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Collider2D, Contact2DType, Vec3, _dec, _class, _class2, _descriptor, _descriptor2, _temp, _crd, ccclass, property, PoolObjects;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Collider2D = _cc.Collider2D;
      Contact2DType = _cc.Contact2DType;
      Vec3 = _cc.Vec3;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a495fSYaV1IMYfq14OcwMl4", "PoolObjects", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("PoolObjects", PoolObjects = (_dec = ccclass('PoolObjects'), _dec(_class = (_class2 = (_temp = class PoolObjects extends Component {
        constructor(...args) {
          super(...args);

          _defineProperty(this, "_pool", void 0);

          _defineProperty(this, "_isHit", false);

          _defineProperty(this, "_currentPos", void 0);

          _initializerDefineProperty(this, "movingDirection", _descriptor, this);

          _initializerDefineProperty(this, "speed", _descriptor2, this);
        }

        SetPool(pool) {
          this._pool = pool;
        }

        OnObjectOut(object) {
          if (this._pool !== undefined) {
            this._pool.put(object);
          }
        }

        start() {
          //collider
          let collider = this.getComponent(Collider2D);

          if (collider) {
            collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
          }
        }

        Moving(deltaTime) {
          this._currentPos = new Vec3(this.node.position.x, this.node.position.y, this.node.position.z);
          this._currentPos.y -= this.speed * this.movingDirection * deltaTime;
          this.node.position = this._currentPos;
        }

        BackToPool() {
          this.OnObjectOut(this.node);
          this._isHit = false;
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "movingDirection", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 1;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "speed", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 400;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=PoolObjects.js.map