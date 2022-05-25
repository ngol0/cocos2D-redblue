System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, PoolManager, _dec, _class, _temp, _crd, ccclass, property, SpawnController;

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

      _cclegacy._RF.push({}, "46f9fCND4FIaIsD/T2mLJsU", "EnemySpawner", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("SpawnController", SpawnController = (_dec = ccclass('SpawnController'), _dec(_class = (_temp = class SpawnController extends Component {
        constructor() {
          super(...arguments);

          _defineProperty(this, "_curEnemySpawnTime", 0);

          _defineProperty(this, "_curIconSpawnTime", 0);

          _defineProperty(this, "_arrayOfTimeBetweenSpawn", []);

          _defineProperty(this, "_arrayOfSprites", []);

          _defineProperty(this, "_timeBetweenEnemySpawn", void 0);

          _defineProperty(this, "_spritesToChoose", void 0);
        }

        //----FOR BOSS----//   
        //private boss: BossSpawner;
        onLoad() {
          //this.arrayOfPositionToSpawn = [-350, -250, -150, -50, 50, 150, 250, 350];
          this._arrayOfSprites = [1, 2, 3, 4, 5, 6, 7];
          this._arrayOfTimeBetweenSpawn = [1, 2, 3, 4, 5];
        } //protected abstract SetSpawningElements();


        SetSpawningElements() {
          //time
          this._timeBetweenEnemySpawn = this._arrayOfTimeBetweenSpawn[Math.floor(Math.random() * this._arrayOfTimeBetweenSpawn.length)]; //sprites

          this._spritesToChoose = this._arrayOfSprites[Math.floor(Math.random() * this._arrayOfSprites.length)];
        }

        start() {
          this.SetSpawningElements();
        }

        update(deltaTime) {
          //spawn obstacles - first come first serve
          //if (this.boss.spawnEnem)
          //{
          if (this._timeBetweenEnemySpawn != 6) {
            this._curEnemySpawnTime += deltaTime;

            if (this._curEnemySpawnTime >= this._timeBetweenEnemySpawn) {
              if (this._spritesToChoose == 1) {
                (_crd && PoolManager === void 0 ? (_reportPossibleCrUseOfPoolManager({
                  error: Error()
                }), PoolManager) : PoolManager).Instance.CreateRedEnemy(this.node);
              } else if (this._spritesToChoose == 2) {
                (_crd && PoolManager === void 0 ? (_reportPossibleCrUseOfPoolManager({
                  error: Error()
                }), PoolManager) : PoolManager).Instance.CreateStoneEnemy(this.node);
              } else if (this._spritesToChoose == 3) {
                (_crd && PoolManager === void 0 ? (_reportPossibleCrUseOfPoolManager({
                  error: Error()
                }), PoolManager) : PoolManager).Instance.CreatePlayer(this.node);
              }

              this._curEnemySpawnTime = 0;
              this.SetSpawningElements();
            }
          } //}

        }

      }, _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=EnemySpawner.js.map