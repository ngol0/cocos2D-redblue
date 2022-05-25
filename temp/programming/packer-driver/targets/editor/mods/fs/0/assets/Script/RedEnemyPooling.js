System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, instantiate, NodePool, Prefab, _dec, _dec2, _class, _class2, _descriptor, _descriptor2, _class3, _temp, _crd, ccclass, property, RedEnemyPooling;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      instantiate = _cc.instantiate;
      NodePool = _cc.NodePool;
      Prefab = _cc.Prefab;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "604a8PhQyBMzbVJUUnW+8Bb", "RedEnemyPooling", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("RedEnemyPooling", RedEnemyPooling = (_dec = ccclass('RedEnemyPooling'), _dec2 = property({
        type: Prefab
      }), _dec(_class = (_class2 = (_temp = _class3 = class RedEnemyPooling extends Component {
        constructor(...args) {
          super(...args);

          _defineProperty(this, "redEnemyPool", void 0);

          _initializerDefineProperty(this, "redEnemyPrefab", _descriptor, this);

          _initializerDefineProperty(this, "amountToPool", _descriptor2, this);
        }

        //create a pool
        onLoad() {
          this.redEnemyPool = new NodePool();

          for (let i = 0; i < this.amountToPool; i++) {
            let enemy = instantiate(this.redEnemyPrefab);
            this.redEnemyPool.put(enemy);
          }
        } //create enemy from pool


        createEnemy(parentNode) {
          let enemy = null;

          if (this.redEnemyPool.size() > 0) // use size method to check if there're nodes available in the pool
            {
              enemy = this.redEnemyPool.get();
            } else // if not enough node in the pool, we call instantiate to create node
            {
              enemy = instantiate(this.redEnemyPrefab);
            }

          enemy.parent = parentNode; //add enemy node to the node tree
          //enemy.getComponent(Enemy).init(); //initialize enemy
        } // //when enemy is out of screen, return it back to the pool
        // onEnemyOut(enemy)
        // {
        //     this.redEnemyPool.put(enemy);
        // }
        //singleton


        start() {
          RedEnemyPooling.Instance = this;
        }

      }, _defineProperty(_class3, "Instance", null), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "redEnemyPrefab", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "amountToPool", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 10;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=RedEnemyPooling.js.map