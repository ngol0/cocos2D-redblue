System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Node, Contact2DType, Collider2D, IconSpawn, Player, _dec, _dec2, _class, _class2, _descriptor, _temp, _crd, ccclass, property, SpeedIcon;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfIconSpawn(extras) {
    _reporterNs.report("IconSpawn", "./IconSpawn", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayer(extras) {
    _reporterNs.report("Player", "./Player", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      Contact2DType = _cc.Contact2DType;
      Collider2D = _cc.Collider2D;
    }, function (_unresolved_2) {
      IconSpawn = _unresolved_2.IconSpawn;
    }, function (_unresolved_3) {
      Player = _unresolved_3.Player;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "8c76b46Ks9O2IYoadwB1JQb", "SpeedIcon", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("SpeedIcon", SpeedIcon = (_dec = ccclass('SpeedIcon'), _dec2 = property({
        type: Node
      }), _dec(_class = (_class2 = (_temp = class SpeedIcon extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "player", _descriptor, this);

          _defineProperty(this, "activeTime", 5);

          _defineProperty(this, "curActiveTime", 0);

          _defineProperty(this, "isActive", false);
        }

        start() {
          //collider
          let collider = this.getComponent(Collider2D);

          if (collider) {
            collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
          }
        }

        onBeginContact(selfCollider, otherCollider, contact) {
          if (otherCollider.node.name == "Player") {
            //fast spped
            this.isActive = true;
            this.player.getComponent(_crd && Player === void 0 ? (_reportPossibleCrUseOfPlayer({
              error: Error()
            }), Player) : Player).SetFasterSpeed();
            this.node.getComponent(_crd && IconSpawn === void 0 ? (_reportPossibleCrUseOfIconSpawn({
              error: Error()
            }), IconSpawn) : IconSpawn).Respawn();
          } else {
            this.node.getComponent(_crd && IconSpawn === void 0 ? (_reportPossibleCrUseOfIconSpawn({
              error: Error()
            }), IconSpawn) : IconSpawn).Respawn();
          }
        }

        update(deltaTime) {
          if (!this.isActive) {
            return;
          }

          this.curActiveTime += deltaTime;

          if (this.curActiveTime > this.activeTime) {
            this.player.getComponent(_crd && Player === void 0 ? (_reportPossibleCrUseOfPlayer({
              error: Error()
            }), Player) : Player).SettNormalSpeed();
            this.isActive = false;
            this.curActiveTime = 0;
          }
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "player", [_dec2], {
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
//# sourceMappingURL=SpeedIcon.js.map