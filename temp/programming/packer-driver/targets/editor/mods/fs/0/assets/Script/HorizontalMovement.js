System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Vec3, director, _dec, _class, _class2, _temp, _crd, ccclass, property, HorizontalMovement;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Vec3 = _cc.Vec3;
      director = _cc.director;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "fbc842MhEZCdpapeLvzfgum", "HorizontalMovement", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("HorizontalMovement", HorizontalMovement = (_dec = ccclass('HorizontalMovement'), _dec(_class = (_temp = _class2 = class HorizontalMovement extends Component {
        constructor(...args) {
          super(...args);

          _defineProperty(this, "_moveDirection", void 0);

          _defineProperty(this, "_isMoving", void 0);

          _defineProperty(this, "_startToMove", void 0);

          _defineProperty(this, "_curPos", void 0);

          _defineProperty(this, "_step", 100);

          _defineProperty(this, "_targetPos", new Vec3());

          _defineProperty(this, "_curMoveTime", 0);

          _defineProperty(this, "_moveTime", 0.2);

          _defineProperty(this, "_moveSpeed", 400);

          _defineProperty(this, "_angle", 0);

          _defineProperty(this, "_rotateSpeed", 400);

          _defineProperty(this, "_gridEndLeft", -350);

          _defineProperty(this, "_gridEndRight", 350);
        }

        start() {
          HorizontalMovement.Instance = this;
        } ///--PLAYER'S MOVEMENT--//
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
              this.node.setRotationFromEuler(new Vec3(0, 0, this._angle + 90)); //console.log(this.node.eulerAngles);

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
                  console.log('game over');
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
        } // }


      }, _defineProperty(_class2, "Instance", null), _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=HorizontalMovement.js.map