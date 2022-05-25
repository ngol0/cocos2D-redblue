System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Prefab, instantiate, Vec3, Boss, _dec, _dec2, _class, _class2, _descriptor, _temp, _crd, ccclass, property, BossSpawner;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfBoss(extras) {
    _reporterNs.report("Boss", "./Boss", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Prefab = _cc.Prefab;
      instantiate = _cc.instantiate;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      Boss = _unresolved_2.Boss;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "78994KTbntN5qqdyx0VgRhM", "BossSpawner", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("BossSpawner", BossSpawner = (_dec = ccclass('BossSpawner'), _dec2 = property({
        type: Prefab
      }), _dec(_class = (_class2 = (_temp = class BossSpawner extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "boss", _descriptor, this);

          _defineProperty(this, "myBoss", void 0);

          _defineProperty(this, "timeTilBoss", 20);

          _defineProperty(this, "curTimeForBoss", 0);

          _defineProperty(this, "spawnBoss", false);

          _defineProperty(this, "spawnEnem", true);
        }

        start() {
          this.SpawnBoss();
        }

        update(deltaTime) {
          //count down til boss appears
          this.curTimeForBoss += deltaTime; //if time for boss to appear - spawn boss and stop spawn enemies

          if (this.curTimeForBoss >= this.timeTilBoss) {
            this.spawnEnem = false;
            this.spawnBoss = true;
          } //boss starts to appear and move


          if (this.spawnBoss) {
            this.myBoss.getComponent(_crd && Boss === void 0 ? (_reportPossibleCrUseOfBoss({
              error: Error()
            }), Boss) : Boss).Move(deltaTime);
          }
        } //spawn boss at the start of game


        SpawnBoss() {
          this.myBoss = instantiate(this.boss);
          this.myBoss.parent = this.node;
          this.myBoss.position = new Vec3(0, 1100, 0);
        } //respawn enemies after boss is beaten


        SpawnEnem() {
          this.spawnEnem = true;
          this.spawnBoss = false;
          this.curTimeForBoss = 0;
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "boss", [_dec2], {
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
//# sourceMappingURL=BossSpawner.js.map