System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Collider2D, Contact2DType, IconSpawn, _dec, _class, _crd, ccclass, property, BulletIcon;

  function _reportPossibleCrUseOfIconSpawn(extras) {
    _reporterNs.report("IconSpawn", "./IconSpawn", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Collider2D = _cc.Collider2D;
      Contact2DType = _cc.Contact2DType;
    }, function (_unresolved_2) {
      IconSpawn = _unresolved_2.IconSpawn;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d5b4a5WZ3lNKpOjQjsYzdx4", "BulletIcon", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("BulletIcon", BulletIcon = (_dec = ccclass('BulletIcon'), _dec(_class = class BulletIcon extends Component {
        // @property({type: Player})
        // public player: Player|null = null;
        // @property({type: BulletAct})
        // public bullet: BulletAct|null = null;
        start() {
          //collider
          let collider = this.getComponent(Collider2D);

          if (collider) {
            collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
          }
        }

        onBeginContact(selfCollider, otherCollider, contact) {
          if (otherCollider.node.name == "Player") {
            //spawn bullet
            //this.bullet.getComponent(BulletAct).SetActiveBullet();
            this.node.getComponent(_crd && IconSpawn === void 0 ? (_reportPossibleCrUseOfIconSpawn({
              error: Error()
            }), IconSpawn) : IconSpawn).Respawn();
          } else {
            this.node.getComponent(_crd && IconSpawn === void 0 ? (_reportPossibleCrUseOfIconSpawn({
              error: Error()
            }), IconSpawn) : IconSpawn).Respawn();
          }
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=BulletIcon.js.map