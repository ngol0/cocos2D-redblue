System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Prefab, _dec, _dec2, _class, _class2, _descriptor, _temp, _crd, ccclass, property, BulletAct;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Prefab = _cc.Prefab;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "db7ef7UZ/JN3rnnu9A5oT20", "BulletAct", undefined);

      //import { Player } from './Player';
      ({
        ccclass,
        property
      } = _decorator);

      _export("BulletAct", BulletAct = (_dec = ccclass('BulletAct'), _dec2 = property({
        type: Prefab
      }), _dec(_class = (_class2 = (_temp = class BulletAct extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "bulletNode", _descriptor, this);
        }

        start() {// [3]
        }

        update(deltaTime) {// [4]
          // if (!this.node.parent.getComponent(Player).isMoving)
          // {
          //     this.curPos = new Vec3(this.node.position.x, this.node.position.y, this.node.position.z);
          //     this.curPos.y += 200 * deltaTime;
          //     this.node.position = this.curPos;
          // }
        }

        SetActiveBullet() {// let bullet = instantiate(this.bulletNode);
          // let canvas = game.canvas;
          // bullet.position = this.node.position;
          // bullet.parent = this.node.parent;
          //this.node.active = true;
          //this.Shoot();
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "bulletNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=BulletAct.js.map