System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Node, Collider2D, Contact2DType, IconSpawn, ShieldAct, _dec, _dec2, _class, _class2, _descriptor, _temp, _crd, ccclass, property, ShieldIcon;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfIconSpawn(extras) {
    _reporterNs.report("IconSpawn", "./IconSpawn", _context.meta, extras);
  }

  function _reportPossibleCrUseOfShieldAct(extras) {
    _reporterNs.report("ShieldAct", "./ShieldAct", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      Collider2D = _cc.Collider2D;
      Contact2DType = _cc.Contact2DType;
    }, function (_unresolved_2) {
      IconSpawn = _unresolved_2.IconSpawn;
    }, function (_unresolved_3) {
      ShieldAct = _unresolved_3.ShieldAct;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "9dc4aYamiRJpYvcHx562ocK", "ShieldIcon", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("ShieldIcon", ShieldIcon = (_dec = ccclass('ShieldIcon'), _dec2 = property({
        type: Node
      }), _dec(_class = (_class2 = (_temp = class ShieldIcon extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "shield", _descriptor, this);
        }

        start() {
          //collider
          var collider = this.getComponent(Collider2D);

          if (collider) {
            collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
          }
        }

        onBeginContact(selfCollider, otherCollider, contact) {
          if (otherCollider.node.name == "Player") {
            //spawn shield
            this.shield.getComponent(_crd && ShieldAct === void 0 ? (_reportPossibleCrUseOfShieldAct({
              error: Error()
            }), ShieldAct) : ShieldAct).SetActiveShield();
            this.node.getComponent(_crd && IconSpawn === void 0 ? (_reportPossibleCrUseOfIconSpawn({
              error: Error()
            }), IconSpawn) : IconSpawn).Respawn();
          } else {
            this.node.getComponent(_crd && IconSpawn === void 0 ? (_reportPossibleCrUseOfIconSpawn({
              error: Error()
            }), IconSpawn) : IconSpawn).Respawn();
          }
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "shield", [_dec2], {
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
//# sourceMappingURL=ShieldIcon.js.map