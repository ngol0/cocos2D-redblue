System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, PoolManager, _dec, _class, _temp, _crd, ccclass, property, EnemySpawner;

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

      _cclegacy._RF.push({}, "1aee7obkCFEaqfyGnp5cyep", "EnemySpawner", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("EnemySpawner", EnemySpawner = (_dec = ccclass('EnemySpawner'), _dec(_class = (_temp = class EnemySpawner extends Component {
        constructor(...args) {
          super(...args);

          _defineProperty(this, "_arrayOfTimeBetweenSpawn", []);

          _defineProperty(this, "_arrayOfSprites", []);

          _defineProperty(this, "_spritesToChoose", void 0);

          _defineProperty(this, "_timeBetweenSpawn", void 0);

          _defineProperty(this, "_curSpawnTime", 0);
        }

        //private boss: BossSpawner;
        start() {
          //this.boss = this.node.parent.getComponent(BossSpawner);
          this._arrayOfTimeBetweenSpawn = [1, 2, 3, 4, 5]; //number of blocks to spawn in column

          this._arrayOfSprites = [1, 2, 3]; //pick a number and the sprites to spawn accordingly

          this.SetSpawningElements();
        }

        SetSpawningElements() {
          //time
          this._timeBetweenSpawn = this._arrayOfTimeBetweenSpawn[Math.floor(Math.random() * this._arrayOfTimeBetweenSpawn.length)]; //sprites

          this._spritesToChoose = this._arrayOfSprites[Math.floor(Math.random() * this._arrayOfSprites.length)];
        }

        update(deltaTime) {
          //spawn obstacles - first come first serve
          //if (this.boss.spawnEnem)
          //{
          this._curSpawnTime += deltaTime;

          if (this._curSpawnTime >= this._timeBetweenSpawn) {
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

            this._curSpawnTime = 0;
            this.SetSpawningElements();
          } //}

        }

      }, _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=EnemySpawner.js.map