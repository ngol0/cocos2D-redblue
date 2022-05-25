System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, SpawnController, _dec, _class, _temp, _crd, ccclass, property, IconSpawner;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfSpawnController(extras) {
    _reporterNs.report("SpawnController", "./SpawnController", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      SpawnController = _unresolved_2.SpawnController;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c44f93CO5NK6LsZ10lMPWHV", "IconSpawner", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("IconSpawner", IconSpawner = (_dec = ccclass('IconSpawner'), _dec(_class = (_temp = class IconSpawner extends (_crd && SpawnController === void 0 ? (_reportPossibleCrUseOfSpawnController({
        error: Error()
      }), SpawnController) : SpawnController) {
        constructor() {
          super(...arguments);

          _defineProperty(this, "curSpawnTime", 0);
        }

        //private respawn: boolean = false;
        start() {}

        update(deltaTime) {}

      }, _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=IconSpawner.js.map