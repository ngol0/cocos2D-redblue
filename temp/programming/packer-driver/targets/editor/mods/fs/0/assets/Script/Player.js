System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Vec3, Contact2DType, Collider2D, director, Sprite, Color, _dec, _class, _temp, _crd, ccclass, property, Player;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Vec3 = _cc.Vec3;
      Contact2DType = _cc.Contact2DType;
      Collider2D = _cc.Collider2D;
      director = _cc.director;
      Sprite = _cc.Sprite;
      Color = _cc.Color;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "09661pP6BNMj5+CLeBqekCj", "Player", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Player", Player = (_dec = ccclass('Player'), _dec(_class = (_temp = class Player extends Component {
        constructor(...args) {
          super(...args);

          _defineProperty(this, "moveDirection", void 0);

          _defineProperty(this, "isMoving", void 0);

          _defineProperty(this, "startToMove", void 0);

          _defineProperty(this, "currentPos", void 0);

          _defineProperty(this, "step", 100);

          _defineProperty(this, "targetPos", new Vec3());

          _defineProperty(this, "curMoveTime", 0);

          _defineProperty(this, "moveTime", 0.2);

          _defineProperty(this, "moveSpeed", 400);

          _defineProperty(this, "angle", 0);

          _defineProperty(this, "rotateSpeed", 300);

          _defineProperty(this, "gridEndLeft", -350);

          _defineProperty(this, "gridEndRight", 350);

          _defineProperty(this, "shieldActive", false);

          _defineProperty(this, "myColor", void 0);
        }

        //--Collision with enenmy--//
        start() {
          let collider = this.getComponent(Collider2D);

          if (collider) {
            collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
          }

          this.myColor = this.node.getChildByName("Inside").getComponent(Sprite).color;
          console.log(this.myColor.toHEX("#rrggbb"));
        }

        onBeginContact(selfCollider, otherCollider, contact) {
          if (otherCollider.node.name == "RedObstacles" || otherCollider.node.name == "StoneObstacles") {
            // //when shield is inactive
            if (!this.shieldActive) {
              director.loadScene('scene');
            }
          }
        } //--PLAYER'S MOVEMENT--//
        //tweening


        update(deltaTime) {
          if (this.startToMove) {
            this.curMoveTime += deltaTime;

            if (this.curMoveTime > this.moveTime) {
              //end
              this.node.position = this.targetPos;
              this.node.setRotationFromEuler(new Vec3(0, 0, this.angle + 90)); //console.log(this.node.eulerAngles);

              this.startToMove = false;
              this.MoveEnd();
            } else //tween and rotate
              {
                //tween
                this.currentPos.x += this.moveSpeed * deltaTime * this.moveDirection;
                this.node.position = this.currentPos; //rotate

                let newRotation = this.node.eulerAngles.z + this.rotateSpeed * -this.moveDirection * deltaTime;
                this.node.eulerAngles = new Vec3(0, 0, newRotation); //check to see if the player is still in grid

                if (this.currentPos.x > this.gridEndRight || this.currentPos.x < this.gridEndLeft) {
                  console.log('game over');
                  director.loadScene('scene');
                }
              }
          }
        } //make sure that next move only starts when prev move finishes


        MoveEnd() {
          this.isMoving = false;
          this.node.setRotationFromEuler(new Vec3(0, 0, 0));
        } //move left or right


        Move(direction) {
          if (this.isMoving) {
            return;
          } //left -1 right 1


          this.moveDirection = direction; //set current move time

          this.curMoveTime = 0; //set target position

          this.currentPos = new Vec3(this.node.position.x, this.node.position.y, this.node.position.z);
          Vec3.add(this.targetPos, this.currentPos, new Vec3(this.step * direction, 0, 0)); //targetAngle

          this.angle = this.node.eulerAngles.z;
          this.startToMove = true;
          this.isMoving = true;
        } //--FOR SHIELD--//


        SetActiveShield() {
          this.shieldActive = true;
        }

        SetNonActiveShield() {
          this.shieldActive = false;
        } //--FOR SPEED--//


        SetFasterSpeed() {
          this.moveTime = 0.1;
        }

        SettNormalSpeed() {
          this.moveTime = 0.2;
        } //--CHANGE COLOR--//


        ChangeColor() {
          this.myColor = Color.RED;
          console.log(this.myColor.toHEX("#rrggbb")); //this.node.getChildByName("Inside").color = Color.RED;
          // console.log(this.node.getChildByName("Inside").color.toHEX("#rrggbb"));
          // this.node.getChildByName("Inside").color = new Color(255, 255, 255);
        }

      }, _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=Player.js.map