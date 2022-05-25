System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Node, RichText, director, ProgressBar, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _class3, _temp, _crd, ccclass, property, GameManager;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      RichText = _cc.RichText;
      director = _cc.director;
      ProgressBar = _cc.ProgressBar;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "4adceB/yvhLDr1sJbwTodtN", "GameManager", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GameManager", GameManager = (_dec = ccclass('GameManager'), _dec2 = property({
        type: RichText
      }), _dec3 = property({
        type: Node
      }), _dec4 = property({
        type: Node
      }), _dec5 = property({
        type: ProgressBar
      }), _dec(_class = (_class2 = (_temp = _class3 = class GameManager extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "score", _descriptor, this);

          _initializerDefineProperty(this, "PlayerBlueInside", _descriptor2, this);

          _initializerDefineProperty(this, "PlayerRedInside", _descriptor3, this);

          _defineProperty(this, "arrayOfTime", []);

          _defineProperty(this, "isChecked", false);

          _defineProperty(this, "colorChange", false);

          _defineProperty(this, "count", 2);

          _defineProperty(this, "isRed", false);

          _defineProperty(this, "isBlue", true);

          _initializerDefineProperty(this, "timerBar", _descriptor4, this);

          _initializerDefineProperty(this, "myScore", _descriptor5, this);

          _defineProperty(this, "colorScore", void 0);
        }

        start() {
          GameManager.Instance = this;
          this.score.string = this.myScore.toString();
        }

        AddScore(addedScore) {
          this.myScore += addedScore;
          this.score.string = this.myScore.toString(); //console.log(this.myScore);

          return this.myScore;
        }

        AddProgressBar() {
          this.timerBar.progress += 0.05;
          this.colorScore = this.timerBar.progress; // console.log(this.colorScore);

          this.CheckScoreForColorChangeing(this.colorScore);
        }

        LoadGame() {
          director.loadScene("main");
        } //changing player's color


        CheckScoreForColorChangeing(score) {
          if (score >= 1 && this.count % 2 == 0) //red active
            {
              this.colorChange = true;
              this.PlayerBlueInside.active = false;
              this.PlayerRedInside.active = true;
              this.count++;
              this.timerBar.progress = 0;
              this.isRed = true;
              this.isBlue = false;
            } else if (score >= 1 && this.count % 2 != 0) //blue active
            {
              this.colorChange = false;
              this.PlayerBlueInside.active = true;
              this.PlayerRedInside.active = false;
              this.count++;
              this.timerBar.progress = 0;
              this.isRed = false;
              this.isBlue = true;
            }
        }

      }, _defineProperty(_class3, "Instance", null), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "score", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "PlayerBlueInside", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "PlayerRedInside", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "timerBar", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "myScore", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=GameManager.js.map