System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Node, Boss, PoolManager, _dec, _dec2, _class, _class2, _descriptor, _class3, _temp, _crd, ccclass, property, ItemType, Spawner;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfBoss(extras) {
    _reporterNs.report("Boss", "./Boss", _context.meta, extras);
  }

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
      Node = _cc.Node;
    }, function (_unresolved_2) {
      Boss = _unresolved_2.Boss;
    }, function (_unresolved_3) {
      PoolManager = _unresolved_3.PoolManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "de134oHwARHSaBmEge51rqR", "Spawner", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      (function (ItemType) {
        ItemType[ItemType["BT_NONE"] = 0] = "BT_NONE";
        ItemType[ItemType["BT_ENEMY"] = 1] = "BT_ENEMY";
        ItemType[ItemType["BT_PLAYER"] = 2] = "BT_PLAYER";
        ItemType[ItemType["BT_BOMBICONS"] = 3] = "BT_BOMBICONS";
        ItemType[ItemType["BT_ICONS"] = 4] = "BT_ICONS";
      })(ItemType || (ItemType = {}));

      ;

      _export("Spawner", Spawner = (_dec = ccclass('Spawner'), _dec2 = property({
        type: Node
      }), _dec(_class = (_class2 = (_temp = _class3 = class Spawner extends Component {
        constructor(...args) {
          super(...args);

          _defineProperty(this, "_timeBetweenSpawn", 1);

          _defineProperty(this, "_row", []);

          _defineProperty(this, "rowLength", 8);

          _defineProperty(this, "_arrayOfPositionToSpawn", []);

          _defineProperty(this, "_curSpawnTime", 0);

          _defineProperty(this, "bossSpawning", false);

          _defineProperty(this, "_oneTime", false);

          _defineProperty(this, "_count", 0);

          _defineProperty(this, "_timeForBoss", 5);

          _initializerDefineProperty(this, "bossNode", _descriptor, this);
        }

        //--DEFAULT METHODS--//
        onLoad() {
          Spawner.Instance = this;
          this._arrayOfPositionToSpawn = [-350, -250, -150, -50, 50, 150, 250, 350];
        }

        start() {
          this.generateItemsByRow();
        } //---GENERATE ITEMS BY ROW---//
        //generate only enemies


        generateItemsByRow() {
          this._row = [];

          if (!this.bossSpawning) {
            //if not spawning boss, generate enemies
            this._row.push(ItemType.BT_NONE); //making sure array always have at least one 0


            let roll = Math.floor(Math.random() * 6 + 1);
            if (roll == 3 || roll == 5) //randomly choose a number - if it is 3 or 5 or 4, spawns an icon
              this._row.push(ItemType.BT_ICONS);else if (roll == 4) this._row.push(ItemType.BT_BOMBICONS);else if (roll == 1 || roll == 2 || roll == 6) this._row.push(ItemType.BT_ENEMY);

            for (let i = 2; i < this.rowLength; i++) this._row.push(Math.floor(Math.random() * 3)); //0 to 2

          } else {
            //else, generate icons only
            this._row.push(ItemType.BT_ICONS);

            for (let i = 1; i < this.rowLength; i++) this._row.push(ItemType.BT_NONE);
          } // for (let n = 0; n < this.rowLength; n++)
          //     console.log(this._row[n]);


          this.shuffle(this._row); //shuffle the contents of array

          this.spawnItems();
        }

        spawnItems() {
          for (let j = 0; j < this._row.length; j++) {
            let item = this.spawnByItemType(this._row[j]); //spawning items

            if (item) {
              this.node.addChild(item);
              item.setPosition(this._arrayOfPositionToSpawn[j], 760, 0);
            }
          }
        }

        spawnByItemType(type) {
          let block = null;

          switch (type) {
            case ItemType.BT_ENEMY:
              block = (_crd && PoolManager === void 0 ? (_reportPossibleCrUseOfPoolManager({
                error: Error()
              }), PoolManager) : PoolManager).Instance.CreateEnemy();
              break;

            case ItemType.BT_ICONS:
              block = (_crd && PoolManager === void 0 ? (_reportPossibleCrUseOfPoolManager({
                error: Error()
              }), PoolManager) : PoolManager).Instance.CreateIcons();
              break;

            case ItemType.BT_PLAYER:
              block = (_crd && PoolManager === void 0 ? (_reportPossibleCrUseOfPoolManager({
                error: Error()
              }), PoolManager) : PoolManager).Instance.CreatePlayer();
              break;

            case ItemType.BT_BOMBICONS:
              block = (_crd && PoolManager === void 0 ? (_reportPossibleCrUseOfPoolManager({
                error: Error()
              }), PoolManager) : PoolManager).Instance.CreateBombIcons();
              break;
          }

          return block;
        }

        shuffle(array) {
          let currentIndex = array.length,
              randomIndex; // While there remain elements to shuffle.

          while (currentIndex != 0) {
            // Pick a remaining element.
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--; // And swap it with the current element.

            [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
          }

          return array;
        } ///---UPDATE---//


        update(deltaTime) {
          this._curSpawnTime += deltaTime;

          if (this._curSpawnTime >= this._timeBetweenSpawn) {
            this.generateItemsByRow();
            this._curSpawnTime = 0;
            this._count++;
          }

          if (this._count > this._timeForBoss) {
            this.bossSpawning = true;

            if (!this._oneTime) {
              this.bossNode.getComponent(_crd && Boss === void 0 ? (_reportPossibleCrUseOfBoss({
                error: Error()
              }), Boss) : Boss).SetActiveBoss();
              this._oneTime = true;
            }
          }
        } //---BOSS METHODS---//


        SetNonActiveBoss() {
          this.bossSpawning = false;
          this._count = 0;
          this._oneTime = false;
        }

      }, _defineProperty(_class3, "Instance", null), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "bossNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=Spawner.js.map