System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Vec3, Collider2D, Contact2DType, ProgressBar, GameManager, PoolManager, Spawner, _dec, _dec2, _class, _class2, _descriptor, _temp, _crd, ccclass, property, Boss;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfGameManager(extras) {
    _reporterNs.report("GameManager", "./GameManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPoolManager(extras) {
    _reporterNs.report("PoolManager", "./PoolManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSpawner(extras) {
    _reporterNs.report("Spawner", "./Spawner", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Vec3 = _cc.Vec3;
      Collider2D = _cc.Collider2D;
      Contact2DType = _cc.Contact2DType;
      ProgressBar = _cc.ProgressBar;
    }, function (_unresolved_2) {
      GameManager = _unresolved_2.GameManager;
    }, function (_unresolved_3) {
      PoolManager = _unresolved_3.PoolManager;
    }, function (_unresolved_4) {
      Spawner = _unresolved_4.Spawner;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "47e2d3o+klPMIMReyisaHwo", "Boss", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Boss", Boss = (_dec = ccclass('Boss'), _dec2 = property({
        type: ProgressBar
      }), _dec(_class = (_class2 = (_temp = class Boss extends Component {
        constructor() {
          super(...arguments);

          _defineProperty(this, "curPos", void 0);

          _defineProperty(this, "speed", 500);

          _defineProperty(this, "moveDown", true);

          _defineProperty(this, "moveUp", false);

          _defineProperty(this, "moveLeft", true);

          _defineProperty(this, "moveRight", false);

          _defineProperty(this, "bossPosY", 500);

          _defineProperty(this, "bossPosLeft", -250);

          _defineProperty(this, "bossPosRight", 250);

          _defineProperty(this, "bossStartingPoint", 750);

          _defineProperty(this, "health", 20);

          _initializerDefineProperty(this, "timerBar", _descriptor, this);

          _defineProperty(this, "shoot", false);

          _defineProperty(this, "timeToShoot", 2);

          _defineProperty(this, "curTimeToShoot", 0);
        }

        start() {
          this.curPos = new Vec3(this.node.position.x, this.node.position.y, this.node.position.z); //collider

          var collider = this.getComponent(Collider2D);

          if (collider) {
            collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
          }
        } //when enemy collides with bullets


        onBeginContact(selfCollider, otherCollider, contact) {
          if (otherCollider.node.name == "Bullet") {
            this.ProcessHit();
          }
        }

        update(deltaTime) {
          this.Move(deltaTime);
          this.Shoot(deltaTime);
        }

        Shoot(deltaTime) {
          if (this.shoot) {
            this.curTimeToShoot += deltaTime;

            if (this.curTimeToShoot >= this.timeToShoot) {
              (_crd && PoolManager === void 0 ? (_reportPossibleCrUseOfPoolManager({
                error: Error()
              }), PoolManager) : PoolManager).Instance.CreateBossBullet();
              this.curTimeToShoot = 0;
            }
          }
        }

        Move(deltaTime) {
          if (this.moveDown) {
            this.curPos.y -= deltaTime * this.speed;

            if (this.node.position.y <= this.bossPosY) {
              this.moveDown = false;
              (_crd && PoolManager === void 0 ? (_reportPossibleCrUseOfPoolManager({
                error: Error()
              }), PoolManager) : PoolManager).Instance.CreateBossBullet();
              this.timerBar.node.active = true;
              this.shoot = true;
            }

            this.node.position = this.curPos;
          }

          if (this.moveUp) {
            this.curPos.y += deltaTime * this.speed;

            if (this.node.position.y >= this.bossStartingPoint) {
              this.moveUp = false; //this.moveDown = true;

              (_crd && Spawner === void 0 ? (_reportPossibleCrUseOfSpawner({
                error: Error()
              }), Spawner) : Spawner).Instance.SetNonActiveBoss();
              this.SetNonActiveBoss();
              this.timerBar.progress = 1;
              this.health = 20;
            }
          }

          if (this.moveLeft) {
            this.curPos.x -= deltaTime * this.speed;

            if (this.node.position.x <= this.bossPosLeft) {
              this.moveLeft = false;
              this.moveRight = true;
            }

            this.node.position = this.curPos;
          }

          if (this.moveRight) {
            this.curPos.x += deltaTime * this.speed;

            if (this.node.position.x >= this.bossPosRight) {
              this.moveLeft = true;
              this.moveRight = false;
            }

            this.node.position = this.curPos;
          }
        }

        SetActiveBoss() {
          this.scheduleOnce(function () {
            this.node.active = true;
            this.moveDown = true;
            this.moveLeft = true;
          }, 10);
        }

        SetNonActiveBoss() {
          this.node.active = false;
          this.moveDown = false;
          this.moveLeft = false;
        }

        ProcessHit() {
          this.health -= 10;
          this.timerBar.progress = this.timerBar.progress - 0.5;
          console.log(this.health);

          if (this.health <= 0) {
            (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
              error: Error()
            }), GameManager) : GameManager).Instance.AddScore(100);
            this.moveUp = true;
            this.shoot = false;
            this.timerBar.node.active = false;
          }
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "timerBar", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=Boss.js.map