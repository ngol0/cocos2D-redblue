System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, _dec, _class, _temp, _crd, ccclass, property, SpawnController;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "1aee7obkCFEaqfyGnp5cyep", "SpawnController", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("SpawnController", SpawnController = (_dec = ccclass('SpawnController'), _dec(_class = (_temp = class SpawnController extends Component {
        constructor(...args) {
          super(...args);

          _defineProperty(this, "_curEnemySpawnTime", 0);

          _defineProperty(this, "_arrayOfTimeBetweenSpawn", []);

          _defineProperty(this, "_arrayOfEnemySprites", []);

          _defineProperty(this, "_enemySpritesToChoose", void 0);

          _defineProperty(this, "_curIconSpawnTime", 0);

          _defineProperty(this, "_timeBetweenSpawn", void 0);
        }

        //private arrayOfPositionToSpawn: number[] = [];
        //----FOR BOSS----//   
        //private boss: BossSpawner;
        onLoad() {
          //this.arrayOfPositionToSpawn = [-350, -250, -150, -50, 50, 150, 250, 350];
          this._arrayOfEnemySprites = [1, 2];
          this._arrayOfTimeBetweenSpawn = [1, 2, 3, 4, 5, 6, 8];
        } //protected abstract SetSpawningElements();


        SetSpawningElements() {
          //time
          this._timeBetweenSpawn = this._arrayOfTimeBetweenSpawn[Math.floor(Math.random() * this._arrayOfTimeBetweenSpawn.length)]; //sprites

          this._enemySpritesToChoose = this._arrayOfEnemySprites[Math.floor(Math.random() * this._arrayOfEnemySprites.length)];
        }

        start() {
          this.SetSpawningElements();
        }

        update(deltaTime) {
          //spawn obstacles - first come first serve
          //if (this.boss.spawnEnem)
          //{
          if (this._timeBetweenSpawn != 8) {
            this._curEnemySpawnTime += deltaTime;

            if (this._curEnemySpawnTime >= this._timeBetweenSpawn) {
              if (this._enemySpritesToChoose == 1) {//PoolManager.Instance.CreateEnemy(this.node);
              } else if (this._enemySpritesToChoose == 2) {//PoolManager.Instance.CreatePlayer(this.node);
              }

              this._curEnemySpawnTime = 0;
              this.SetSpawningElements();
            }
          } else {
            this._curIconSpawnTime += deltaTime;

            if (this._curIconSpawnTime >= this._timeBetweenSpawn) {
              //PoolManager.Instance.CreateIcons(this.node);
              this._curIconSpawnTime = 0;
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
//# sourceMappingURL=SpawnController.js.map