System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Vec3, _dec, _class, _class2, _descriptor, _class3, _temp, _crd, ccclass, property, InteractableObject;

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

      _cclegacy._RF.push({}, "f4682uWQ9NLI407imr1uiyg", "InteractableObject", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("InteractableObject", InteractableObject = (_dec = ccclass('InteractableObject'), _dec(_class = (_class2 = (_temp = _class3 = class InteractableObject extends Component {
        constructor(...args) {
          super(...args);

          _defineProperty(this, "_currentPos", void 0);

          _initializerDefineProperty(this, "movingDirection", _descriptor, this);
        }

        Moving(deltaTime) {
          this._currentPos = new Vec3(this.node.position.x, this.node.position.y, this.node.position.z);
          this._currentPos.y -= InteractableObject.SPEED * this.movingDirection * deltaTime;
          this.node.position = this._currentPos;
        }

        MoveWithSpeed(deltaTime, speed) {
          this._currentPos = new Vec3(this.node.position.x, this.node.position.y, this.node.position.z);
          this._currentPos.y -= speed * this.movingDirection * deltaTime;
          this.node.position = this._currentPos;
        }

      }, _defineProperty(_class3, "SPEED", 200), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "movingDirection", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 1;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=InteractableObject.js.map