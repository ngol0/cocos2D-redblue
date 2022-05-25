System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, PoolManager, _dec, _class, _temp, _crd, ccclass, property, SpawnManager;

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

      _cclegacy._RF.push({}, "1903aMTPYlLFoM8YE/dPnfc", "SpawnManager", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("SpawnManager", SpawnManager = (_dec = ccclass('SpawnManager'), _dec(_class = (_temp = class SpawnManager extends Component {
        constructor() {
          super(...arguments);

          _defineProperty(this, "redTimeBetweenSpawn", Math.random() * 10 + 3);

          _defineProperty(this, "stoneTimeBetweenSpawn", Math.random() * 13 + 10);

          _defineProperty(this, "redCurSpawnTime", 0);

          _defineProperty(this, "stoneCurSpawnTime", 0);
        }

        // redSpawning: boolean = true;
        // stoneSpawning: boolean = false;
        start() {}

        update(deltaTime) {
          //spawn obstacles, one after the other
          this.redCurSpawnTime += deltaTime;
          this.stoneCurSpawnTime += deltaTime; //spawn red first // --TODO: RECALCULATE SPAWN TIME--

          if (this.redCurSpawnTime > this.redTimeBetweenSpawn) {
            (_crd && PoolManager === void 0 ? (_reportPossibleCrUseOfPoolManager({
              error: Error()
            }), PoolManager) : PoolManager).Instance.createRedEnemy(this.node);
            this.redCurSpawnTime = 0; //this.redTimeBetweenSpawn = Math.random() * 10 + 3;
          } //then spawn stone obstacles, then repeat


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
//# sourceMappingURL=SpawnManager.js.map