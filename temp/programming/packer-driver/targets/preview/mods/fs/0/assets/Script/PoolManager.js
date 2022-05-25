System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Node, instantiate, NodePool, Prefab, Vec3, find, BombIcon, BossBullet, Bullet, Enemy, Icons, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _class3, _temp, _crd, ccclass, property, PoolManager;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfBombIcon(extras) {
    _reporterNs.report("BombIcon", "./BombIcon", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBossBullet(extras) {
    _reporterNs.report("BossBullet", "./BossBullet", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBullet(extras) {
    _reporterNs.report("Bullet", "./Bullet", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEnemy(extras) {
    _reporterNs.report("Enemy", "./Enemy", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIcons(extras) {
    _reporterNs.report("Icons", "./Icons", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      instantiate = _cc.instantiate;
      NodePool = _cc.NodePool;
      Prefab = _cc.Prefab;
      Vec3 = _cc.Vec3;
      find = _cc.find;
    }, function (_unresolved_2) {
      BombIcon = _unresolved_2.BombIcon;
    }, function (_unresolved_3) {
      BossBullet = _unresolved_3.BossBullet;
    }, function (_unresolved_4) {
      Bullet = _unresolved_4.Bullet;
    }, function (_unresolved_5) {
      Enemy = _unresolved_5.Enemy;
    }, function (_unresolved_6) {
      Icons = _unresolved_6.Icons;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "15194T6Cn1LKbHjA8ryPGz5", "PoolManager", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("PoolManager", PoolManager = (_dec = ccclass('PoolManager'), _dec2 = property({
        type: Prefab
      }), _dec3 = property({
        type: Prefab
      }), _dec4 = property({
        type: Prefab
      }), _dec5 = property({
        type: Prefab
      }), _dec6 = property({
        type: Prefab
      }), _dec7 = property({
        type: Prefab
      }), _dec8 = property({
        type: Prefab
      }), _dec9 = property({
        type: Prefab
      }), _dec10 = property({
        type: Prefab
      }), _dec11 = property({
        type: Node
      }), _dec12 = property({
        type: Node
      }), _dec(_class = (_class2 = (_temp = _class3 = class PoolManager extends Component {
        constructor() {
          super(...arguments);

          _defineProperty(this, "enemyPool", void 0);

          _defineProperty(this, "bulletPool", void 0);

          _defineProperty(this, "bossBulletPool", void 0);

          _defineProperty(this, "playerPool", void 0);

          _defineProperty(this, "iconPool", void 0);

          _defineProperty(this, "bombIconPool", void 0);

          _initializerDefineProperty(this, "redEnemyPrefab", _descriptor, this);

          _initializerDefineProperty(this, "stoneEnemyPrefab", _descriptor2, this);

          _initializerDefineProperty(this, "playerPrefab", _descriptor3, this);

          _initializerDefineProperty(this, "amountOfPlayerEnim", _descriptor4, this);

          _initializerDefineProperty(this, "amountOfEnemyToPool", _descriptor5, this);

          _initializerDefineProperty(this, "bulletPrefab", _descriptor6, this);

          _initializerDefineProperty(this, "bossBulletPrefab", _descriptor7, this);

          _defineProperty(this, "_offSetforBullet", 50);

          _initializerDefineProperty(this, "amountOfBullet", _descriptor8, this);

          _defineProperty(this, "canvas", void 0);

          _initializerDefineProperty(this, "gunIcon", _descriptor9, this);

          _initializerDefineProperty(this, "shieldIcon", _descriptor10, this);

          _initializerDefineProperty(this, "bombIcon", _descriptor11, this);

          _initializerDefineProperty(this, "speedIcon", _descriptor12, this);

          _defineProperty(this, "_arrayOfIconObjects", []);

          _defineProperty(this, "_arrayOfEnemies", []);

          _initializerDefineProperty(this, "player", _descriptor13, this);

          _initializerDefineProperty(this, "boss", _descriptor14, this);
        }

        //singleton
        start() {
          PoolManager.Instance = this;
        } //create a pool


        onLoad() {
          //create enemy pool that has both stone and different color enemy
          this.enemyPool = new NodePool('Enemy');

          for (var i = 0; i < this.amountOfEnemyToPool; i++) {
            var redEnemy = instantiate(this.redEnemyPrefab);
            var stoneEnemy = instantiate(this.stoneEnemyPrefab);

            this._arrayOfEnemies.push(redEnemy, stoneEnemy);

            this._arrayOfEnemies.forEach(element => {
              var enemyComponent = element.getComponent(_crd && Enemy === void 0 ? (_reportPossibleCrUseOfEnemy({
                error: Error()
              }), Enemy) : Enemy);

              if (enemyComponent && enemyComponent.SetPool) {
                enemyComponent.SetPool(this.enemyPool);
              }

              this.enemyPool.put(element);
            });
          } //create bullet pool


          this.bulletPool = new NodePool('Bullet Pool');

          for (var k = 0; k < this.amountOfBullet; k++) {
            var bullet = instantiate(this.bulletPrefab);
            var bulletComponent = bullet.getComponent(_crd && Bullet === void 0 ? (_reportPossibleCrUseOfBullet({
              error: Error()
            }), Bullet) : Bullet);

            if (bulletComponent && bulletComponent.SetPool) {
              bulletComponent.SetPool(this.bulletPool);
            }

            this.bulletPool.put(bullet);
          } //create player pool that has enemy same color as player


          this.playerPool = new NodePool('Player Pool');

          for (var n = 0; n < this.amountOfPlayerEnim; n++) {
            var player = instantiate(this.playerPrefab);
            var playerComponent = player.getComponent(_crd && Enemy === void 0 ? (_reportPossibleCrUseOfEnemy({
              error: Error()
            }), Enemy) : Enemy);

            if (playerComponent && playerComponent.SetPool) {
              playerComponent.SetPool(this.playerPool);
            }

            this.playerPool.put(player);
          } //create icon pool that has 1 for each icon type


          this.iconPool = new NodePool('Icon Pool');
          var gunicon = instantiate(this.gunIcon);
          var shieldicon = instantiate(this.shieldIcon);
          var speedicon = instantiate(this.speedIcon);

          this._arrayOfIconObjects.push(gunicon, shieldicon, speedicon);

          this._arrayOfIconObjects.forEach(element => {
            var iconComponent = element.getComponent(_crd && Icons === void 0 ? (_reportPossibleCrUseOfIcons({
              error: Error()
            }), Icons) : Icons);

            if (iconComponent && iconComponent.SetPool) {
              iconComponent.SetPool(this.iconPool);
            }

            this.iconPool.put(element);
          });

          this.bombIconPool = new NodePool('BombPool');
          var bombicon = instantiate(this.bombIcon);
          var bombComponent = bombicon.getComponent(_crd && BombIcon === void 0 ? (_reportPossibleCrUseOfBombIcon({
            error: Error()
          }), BombIcon) : BombIcon);

          if (bombComponent && bombComponent.SetPool) {
            bombComponent.SetPool(this.bombIconPool);
          }

          this.bombIconPool.put(bombicon);
          this.bossBulletPool = new NodePool('Boss Bullet Pool');

          for (var l = 0; l < this.amountOfBullet; l++) {
            var bossBullet = instantiate(this.bossBulletPrefab);
            var bossBulletComp = bossBullet.getComponent(_crd && BossBullet === void 0 ? (_reportPossibleCrUseOfBossBullet({
              error: Error()
            }), BossBullet) : BossBullet);

            if (bossBulletComp && bossBulletComp.SetPool) {
              bossBulletComp.SetPool(this.bossBulletPool);
            }

            this.bossBulletPool.put(bossBullet);
          }
        } //create enemy from pool


        CreateEnemy() {
          if (this.enemyPool.size() > 0) // use size method to check if there're nodes available in the pool
            {
              var enemy = this.enemyPool.get(); //enemy.parent = parentNode;
              //enemy.position = v3(0, 0, 0);
            } else {
            //enemy = instantiate(this.redEnemyPrefab); // if not enough node in the pool, we call instantiate to create node
            console.log('no more red enemy');
          }

          return enemy;
        } //create player


        CreatePlayer() {
          if (this.playerPool.size() > 0) // use size method to check if there're nodes available in the pool
            {
              var player = this.playerPool.get();
            } else {
            console.log('no more player');
          }

          return player;
        } //create icons


        CreateIcons() {
          if (this.iconPool.size() > 0) // use size method to check if there're nodes available in the pool
            {
              var icons = this.iconPool.get();
            } else {
            console.log('no more icons');
          }

          return icons;
        }

        CreateBombIcons() {
          if (this.bombIconPool.size() > 0) // use size method to check if there're nodes available in the pool
            {
              var bombicon = this.bombIconPool.get();
              console.log('bombicon');
            } else {
            console.log('no more bomb icons');
          }

          return bombicon;
        } //create bullet


        CreateBullet() {
          if (this.bulletPool.size() > 0) // use size method to check if there're nodes available in the pool
            {
              var bullet = this.bulletPool.get();
              var rootNode = find("Canvas");
              bullet.parent = rootNode;
              bullet.position = new Vec3(this.player.position.x, this.player.position.y + 50, this.player.position.z);
            } else {
            console.log('no more bullet');
          }
        }

        CreateBossBullet() {
          if (this.bossBulletPool.size() > 0) // use size method to check if there're nodes available in the pool
            {
              var bossBullet = this.bossBulletPool.get();
              var rootNode = find("Canvas");
              bossBullet.parent = rootNode;
              bossBullet.position = new Vec3(this.boss.position.x, this.boss.position.y - 50, this.boss.position.z);
            } else {
            console.log('no more boss bullet');
          }
        }

      }, _defineProperty(_class3, "Instance", null), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "redEnemyPrefab", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "stoneEnemyPrefab", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "playerPrefab", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "amountOfPlayerEnim", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 10;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "amountOfEnemyToPool", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 10;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "bulletPrefab", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "bossBulletPrefab", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "amountOfBullet", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 3;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "gunIcon", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "shieldIcon", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "bombIcon", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "speedIcon", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "player", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "boss", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=PoolManager.js.map