System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, PoolManager, _dec, _class, _temp, _crd, ccclass, property, StoneEnemySpawner;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfPoolManager(extras) {
    _reporterNs.report("PoolManager", "./PoolManager", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }, function (_unresolved_2) {
      PoolManager = _unresolved_2.PoolManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c1539C3CINApbkEFAlZr80R", "StoneEnemySpawner", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("StoneEnemySpawner", StoneEnemySpawner = (_dec = ccclass('StoneEnemySpawner'), _dec(_class = (_temp = class StoneEnemySpawner extends Component {
        constructor(...args) {
          super(...args);

          _defineProperty(this, "stoneTimeBetweenSpawn", Math.random() * 7 + 3);

          _defineProperty(this, "stoneCurSpawnTime", 0);
        }

        start() {// [3]
        }

        update(deltaTime) {
          this.stoneCurSpawnTime += deltaTime; //then spawn stone obstacles, then repeat

          if (this.stoneCurSpawnTime > this.stoneTimeBetweenSpawn) {
            (_crd && PoolManager === void 0 ? (_reportPossibleCrUseOfPoolManager({
              error: Error()
            }), PoolManager) : PoolManager).Instance.createStoneEnemy(this.node);
            this.stoneCurSpawnTime = 0; //this.stoneTimeBetweenSpawn = Math.random() * 13 + 10;
          }
        }

      }, _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=StoneEnemySpawner.js.map