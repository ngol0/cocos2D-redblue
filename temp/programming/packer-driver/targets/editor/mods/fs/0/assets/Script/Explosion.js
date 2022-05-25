System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Vec3, _dec, _class, _class2, _temp, _crd, ccclass, property, Explosion;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Vec3 = _cc.Vec3;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "5ebeaqC+UpEl6gg7qAkGSdI", "Explosion", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Explosion", Explosion = (_dec = ccclass('Explosion'), _dec(_class = (_temp = _class2 = class Explosion extends Component {
        constructor(...args) {
          super(...args);

          _defineProperty(this, "_curactiveTime", 0);

          _defineProperty(this, "_activeTime", 0.1);

          _defineProperty(this, "isDamage", false);

          _defineProperty(this, "_startingPos", void 0);
        }

        start() {
          Explosion.Instace = this;
          this._startingPos = new Vec3(this.node.position.x, this.node.position.y, this.node.position.z);
        }

        SetActiveDamage() {
          this.isDamage = true;
        }

        update(deltaTime) {
          if (this.isDamage) {
            this.node.position = new Vec3(-50, 400, 0);
            this._curactiveTime += deltaTime;

            if (this._curactiveTime > this._activeTime) {
              this.node.position = this._startingPos;
              this._curactiveTime = 0;
              this.isDamage = false;
            }
          }
        }

      }, _defineProperty(_class2, "Instace", null), _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=Explosion.js.map