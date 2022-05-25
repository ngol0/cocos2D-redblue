System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Prefab, NodePool, instantiate, _dec, _dec2, _class, _class2, _descriptor, _descriptor2, _class3, _temp, _crd, ccclass, property, Pooling;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Prefab = _cc.Prefab;
      NodePool = _cc.NodePool;
      instantiate = _cc.instantiate;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "14f22412VpFBZm8HhMm5z8s", "Pooling", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Pooling", Pooling = (_dec = ccclass('Pooling'), _dec2 = property({
        type: Prefab
      }), _dec(_class = (_class2 = (_temp = _class3 = class Pooling extends Component {
        constructor() {
          super(...arguments);

          _defineProperty(this, "redEnemyPool", void 0);

          _initializerDefineProperty(this, "redEnemyPrefab", _descriptor, this);

          _initializerDefineProperty(this, "amountToPool", _descriptor2, this);
        }

        //enemy: Node;
        //create a pool
        onLoad() {
          this.redEnemyPool = new NodePool();

          for (var i = 0; i < this.amountToPool; i++) {
            var enemy = instantiate(this.redEnemyPrefab);
            this.redEnemyPool.put(enemy);
          }
        } //create enemy from pool


        createEnemy(parentNode) {
          var enemy = null;

          if (this.redEnemyPool.size() > 0) // use size method to check if there're nodes available in the pool
            {
              enemy = this.redEnemyPool.get();
            } else // if not enough node in the pool, we call cc.instantiate to create node
            {
              enemy = instantiate(this.redEnemyPrefab);
            }

          enemy.parent = parentNode; //add enemy node to the node tree
        }

        start() {
          Pooling.Instance = this;
        } // update (deltaTime: number) {
        //     // [4]
        // }


      }, _defineProperty(_class3, "Instance", null), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "redEnemyPrefab", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "amountToPool", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 20;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=Pooling.js.map