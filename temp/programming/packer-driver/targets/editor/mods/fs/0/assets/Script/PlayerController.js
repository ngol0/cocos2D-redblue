System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Node, Vec3, Collider2D, Contact2DType, director, GameManager, _dec, _dec2, _class, _class2, _descriptor, _class3, _temp, _crd, ccclass, property, PlayerController;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfGameManager(extras) {
    _reporterNs.report("GameManager", "./GameManager", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      Vec3 = _cc.Vec3;
      Collider2D = _cc.Collider2D;
      Contact2DType = _cc.Contact2DType;
      director = _cc.director;
    }, function (_unresolved_2) {
      GameManager = _unresolved_2.GameManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "cfdfe3enOlE1YYirWWmaA8S", "PlayerController", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("PlayerController", PlayerController = (_dec = ccclass('PlayerController'), _dec2 = property({
        type: Node
      }), _dec(_class = (_class2 = (_temp = _class3 = class PlayerController extends Component {
        constructor(...args) {
          super(...args);

          _defineProperty(this, "_moveDirection", void 0);

          _defineProperty(this, "_isMoving", void 0);

          _defineProperty(this, "_startToMove", void 0);

          _defineProperty(this, "_curPos", void 0);

          _defineProperty(this, "_step", 100);

          _defineProperty(this, "_targetPos", new Vec3());

          _defineProperty(this, "_curMoveTime", 0);

          _defineProperty(this, "_moveTime", 0.19);

          _defineProperty(this, "_moveSpeed", 500);

          _defineProperty(this, "_angle", 0);

          _defineProperty(this, "_rotateSpeed", 500);

          _defineProperty(this, "_gridEndLeft", -400);

          _defineProperty(this, "_gridEndRight", 400);

          _defineProperty(this, "shieldActive", false);

          _initializerDefineProperty(this, "shield", _descriptor, this);

          _defineProperty(this, "fastSpeed", false);

          _defineProperty(this, "_iconActiveTime", 8);
        }

        //--Collision with enenmy--//
        start() {
          PlayerController.Instance = this;
          let collider = this.getComponent(Collider2D);

          if (collider) {
            collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
          }
        }

        onBeginContact(selfCollider, otherCollider, contact) {
          if ((_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
            error: Error()
          }), GameManager) : GameManager).Instance.isBlue) {
            if (otherCollider.node.name == "RedObstacles" || otherCollider.node.name == "StoneObstacles") {
              // //when shield is inactive
              if (!this.shieldActive) {
                director.loadScene('scene');
              }
            }
          } else if ((_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
            error: Error()
          }), GameManager) : GameManager).Instance.isRed) {
            if (otherCollider.node.name == "PlayerEnemy" || otherCollider.node.name == "StoneObstacles") {
              // //when shield is inactive
              if (!this.shieldActive) {
                director.loadScene('scene');
              }
            }
          }
        } //--PLAYER'S MOVEMENT--//
        //tweening


        update(deltaTime) {
          this.Moving(deltaTime);
        }

        Moving(deltaTime) {
          if (this._startToMove) {
            this._curMoveTime += deltaTime;

            if (this._curMoveTime > this._moveTime) {
              //end
              this.node.position = this._targetPos;
              this.node.setRotationFromEuler(new Vec3(0, 0, this._angle + 90));
              this._startToMove = false;
              this.MoveEnd();
            } else //tween and rotate
              {
                //tween
                this._curPos.x += this._moveSpeed * deltaTime * this._moveDirection;
                this.node.position = this._curPos; //rotate

                let newRotation = this.node.eulerAngles.z + this._rotateSpeed * -this._moveDirection * deltaTime;
                this.node.eulerAngles = new Vec3(0, 0, newRotation); //check to see if the player is still in grid

                if (this._curPos.x > this._gridEndRight || this._curPos.x < this._gridEndLeft) {
                  console.log('out grid');
                  director.loadScene('scene');
                }
              }
          }
        } //make sure that next move only starts when prev move finishes


        MoveEnd() {
          this._isMoving = false;
          this.node.setRotationFromEuler(new Vec3(0, 0, 0));
        } //move left or right


        InputForMove(direction) {
          if (this._isMoving) {
            return;
          } //left -1 right 1


          this._moveDirection = direction; //set current move time

          this._curMoveTime = 0; //set target position

          this._curPos = new Vec3(this.node.position.x, this.node.position.y, this.node.position.z);
          Vec3.add(this._targetPos, this._curPos, new Vec3(this._step * direction, 0, 0)); //targetAngle

          this._angle = this.node.eulerAngles.z;
          this._startToMove = true;
          this._isMoving = true;
        } //  //--FOR SHIELD--//


        SetActiveShield() {
          this.shieldActive = true;
          this.shield.active = true;
          this.scheduleOnce(function () {
            this.SetNonActiveShield();
          }, this._iconActiveTime);
        }

        SetNonActiveShield() {
          this.shieldActive = false;
          this.shield.active = false;
        } //--FOR SPEED--//


        SetFasterSpeed() {
          this._moveTime = 0.16;
          this._moveSpeed = 600;
          this._rotateSpeed = 700;
          this.fastSpeed = true;
          this.scheduleOnce(function () {
            this.SettNormalSpeed();
          }, this._iconActiveTime);
        }

        SettNormalSpeed() {
          this._moveTime = 0.19;
          this._moveSpeed = 500;
          this._rotateSpeed = 500;
          this.fastSpeed = false;
        }

      }, _defineProperty(_class3, "Instance", null), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "shield", [_dec2], {
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
//# sourceMappingURL=PlayerController.js.map