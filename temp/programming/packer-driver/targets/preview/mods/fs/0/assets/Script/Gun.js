System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, PoolManager, _dec, _class, _class2, _descriptor, _class3, _temp, _crd, ccclass, property, Gun;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfPoolManager(extras) {
    _reporterNs.report("PoolManager", "./PoolManager", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }, function (_unresolved_2) {
      PoolManager = _unresolved_2.PoolManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c2864NvZw1CpLQO0xJH+i4H", "Gun", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Gun", Gun = (_dec = ccclass('Gun'), _dec(_class = (_class2 = (_temp = _class3 = class Gun extends Component {
        constructor() {
          super(...arguments);

          _defineProperty(this, "curActiveTime", 0);

          _initializerDefineProperty(this, "activeTime", _descriptor, this);

          _defineProperty(this, "_timeBetweenBullets", 2);

          _defineProperty(this, "_curBulletTime", 0);

          _defineProperty(this, "gunIsActive", false);
        }

        start() {
          Gun.Instance = this;
        }

        update(deltaTime) {
          if (this.gunIsActive) {
            this._curBulletTime += deltaTime;
            this.curActiveTime += deltaTime;

            if (this._curBulletTime > this._timeBetweenBullets) //shoot every 2 secs
              {
                (_crd && PoolManager === void 0 ? (_reportPossibleCrUseOfPoolManager({
                  error: Error()
                }), PoolManager) : PoolManager).Instance.CreateBullet();
                this._curBulletTime = 0;
              }

            if (this.curActiveTime >= this.activeTime) //stop shooting after 10 secs
              {
                this.gunIsActive = false;
                this.curActiveTime = 0;
              }
          }
        }

        Shoot() {
          this.scheduleOnce(function () {
            // Here this refers to component
            (_crd && PoolManager === void 0 ? (_reportPossibleCrUseOfPoolManager({
              error: Error()
            }), PoolManager) : PoolManager).Instance.CreateBullet();
          }, 0.2);
          this.gunIsActive = true;
        }

        SetCurTimer() {
          this.gunIsActive = false;
          this.curActiveTime = 0;
          this._curBulletTime = 0;
        }

      }, _defineProperty(_class3, "Instance", null), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "activeTime", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 5;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=Gun.js.map