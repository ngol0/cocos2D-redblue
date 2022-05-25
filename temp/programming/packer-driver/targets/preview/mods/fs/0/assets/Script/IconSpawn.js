System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Vec3, _dec, _class, _class2, _descriptor, _temp, _crd, ccclass, property, IconSpawn;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Vec3 = _cc.Vec3;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f19f5rvN9REJ5ME7pVnS5no", "IconSpawn", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("IconSpawn", IconSpawn = (_dec = ccclass('IconSpawn'), _dec(_class = (_class2 = (_temp = class IconSpawn extends Component {
        constructor() {
          super(...arguments);

          _defineProperty(this, "arrayOfPositionToSpawn", []);

          _defineProperty(this, "pos", void 0);

          _defineProperty(this, "height", 1300);

          _defineProperty(this, "currentPos", void 0);

          _defineProperty(this, "offScreen", -650);

          _defineProperty(this, "speed", 350);

          _defineProperty(this, "curSpawnTime", 0);

          _initializerDefineProperty(this, "spawnTime", _descriptor, this);

          _defineProperty(this, "respawn", false);
        }

        start() {
          //create array
          this.arrayOfPositionToSpawn = [-350, -250, -150, -50, 50, 150, 250, 350];
        }

        update(deltaTime) {
          this.curSpawnTime += deltaTime;

          if (this.respawn) {
            this.pos = new Vec3(this.node.position.x, this.node.position.y, this.node.position.z);
            this.pos.x = this.arrayOfPositionToSpawn[Math.floor(Math.random() * this.arrayOfPositionToSpawn.length)];
            this.pos.y = this.height;
            this.node.position = this.pos;
            this.respawn = false;
            this.curSpawnTime = 0;
          }

          if (this.curSpawnTime > this.spawnTime) {
            this.currentPos = new Vec3(this.node.position.x, this.node.position.y, this.node.position.z);
            this.currentPos.y -= this.speed * deltaTime;
            this.node.position = this.currentPos;

            if (this.currentPos.y < this.offScreen) {
              this.Respawn();
              this.curSpawnTime = 0;
              this.spawnTime += 2;
            }
          }
        }

        Respawn() {
          this.respawn = true;
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "spawnTime", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 10;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=IconSpawn.js.map