System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Collider2D, Contact2DType, GameManager, Gun, PlayerController, PoolObjects, _dec, _class, _crd, ccclass, property, Icons;

  function _reportPossibleCrUseOfGameManager(extras) {
    _reporterNs.report("GameManager", "./GameManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGun(extras) {
    _reporterNs.report("Gun", "./Gun", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayerController(extras) {
    _reporterNs.report("PlayerController", "./PlayerController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPoolObjects(extras) {
    _reporterNs.report("PoolObjects", "./PoolObjects", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Collider2D = _cc.Collider2D;
      Contact2DType = _cc.Contact2DType;
    }, function (_unresolved_2) {
      GameManager = _unresolved_2.GameManager;
    }, function (_unresolved_3) {
      Gun = _unresolved_3.Gun;
    }, function (_unresolved_4) {
      PlayerController = _unresolved_4.PlayerController;
    }, function (_unresolved_5) {
      PoolObjects = _unresolved_5.PoolObjects;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "0727dfZKzZPCKtGVTLWsL4u", "Icons", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Icons", Icons = (_dec = ccclass('Icons'), _dec(_class = class Icons extends (_crd && PoolObjects === void 0 ? (_reportPossibleCrUseOfPoolObjects({
        error: Error()
      }), PoolObjects) : PoolObjects) {
        start() {
          //collider
          let collider = this.getComponent(Collider2D);

          if (collider) {
            collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
          }
        }

        update(deltaTime) {
          this.Moving(deltaTime);

          if (this._isHit) {
            (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
              error: Error()
            }), GameManager) : GameManager).Instance.AddScore(1);
            this.BackToPool();
          }
        }

        onBeginContact(selfCollider, otherCollider, contact) {
          //tag1: gun icon
          //tag3: bombicon
          //tag7: shield icon
          //tag8: speed icon
          if (selfCollider.tag == 6 && otherCollider.tag == 5) {
            //gun
            if ((_crd && Gun === void 0 ? (_reportPossibleCrUseOfGun({
              error: Error()
            }), Gun) : Gun).Instance.gunIsActive) //if icon is hit before, second icon will reset the timer
              (_crd && Gun === void 0 ? (_reportPossibleCrUseOfGun({
                error: Error()
              }), Gun) : Gun).Instance.SetCurTimer(); //else

            (_crd && Gun === void 0 ? (_reportPossibleCrUseOfGun({
              error: Error()
            }), Gun) : Gun).Instance.Shoot(); //shooting

            this._isHit = true;
            console.log('gun hit player');
          } else if (selfCollider.tag == 7 && otherCollider.tag == 5) {
            //shield
            (_crd && PlayerController === void 0 ? (_reportPossibleCrUseOfPlayerController({
              error: Error()
            }), PlayerController) : PlayerController).Instance.SetActiveShield();
            this._isHit = true;
            console.log('shield hit player');
          } else if (selfCollider.tag == 8 && otherCollider.tag == 5) {
            //speed
            (_crd && PlayerController === void 0 ? (_reportPossibleCrUseOfPlayerController({
              error: Error()
            }), PlayerController) : PlayerController).Instance.SetFasterSpeed();
            this._isHit = true;
            console.log('speed hit player');
          } else if (otherCollider.tag == 4) //tag4: outofbound
            {
              //kill enemy
              this._isHit = true;
            }
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=Icons.js.map