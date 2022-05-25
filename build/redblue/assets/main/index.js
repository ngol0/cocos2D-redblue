System.register("chunks:///_virtual/Icons.ts",["./_rollupPluginModLoBabelHelpers.js","cc","./GameManager.ts","./PoolObjects.ts","./Gun.ts","./PlayerController.ts"],(function(t){"use strict";var e,n,i,o,s,c,a,r,l,u,h;return{setters:[function(t){e=t.inheritsLoose,n=t.defineProperty,i=t.assertThisInitialized},function(t){o=t.cclegacy,s=t._decorator,c=t.Collider2D,a=t.Contact2DType},function(t){r=t.GameManager},function(t){l=t.PoolObjects},function(t){u=t.Gun},function(t){h=t.PlayerController}],execute:function(){var p;o._RF.push({},"0727dfZKzZPCKtGVTLWsL4u","Icons",void 0);var g=s.ccclass;s.property,t("Icons",g("Icons")(p=function(t){function o(){for(var e,o=arguments.length,s=new Array(o),c=0;c<o;c++)s[c]=arguments[c];return e=t.call.apply(t,[this].concat(s))||this,n(i(e),"_iconActiveTime",3),n(i(e),"_respawnTime",10),n(i(e),"_curRespawnTime",0),e}e(o,t);var s=o.prototype;return s.start=function(){var t=this.getComponent(c);t&&t.on(a.BEGIN_CONTACT,this.onBeginContact,this)},s.update=function(t){this.Moving(t),this._isHit&&(r.Instance.AddScore(1),this.BackToPool(),this._curRespawnTime+=t)},s.onBeginContact=function(t,e,n){6==t.tag&&5==e.tag?(u.Instance.gunIsActive&&u.Instance.SetCurTimer(),u.Instance.Shoot(),this._isHit=!0,console.log("gun hit player")):7==t.tag&&5==e.tag?(h.Instance.SetActiveShield(),this.scheduleOnce((function(){h.Instance.SetNonActiveShield()}),this._iconActiveTime),this._isHit=!0,console.log("shield hit player")):8==t.tag&&5==e.tag?(h.Instance.SetFasterSpeed(),this.scheduleOnce((function(){h.Instance.SettNormalSpeed()}),this._iconActiveTime),this._isHit=!0,console.log("speed hit player")):4==e.tag&&(this._isHit=!0)},o}(l))||p);o._RF.pop()}}}));

System.register("chunks:///_virtual/InputController.ts",["./_rollupPluginModLoBabelHelpers.js","cc","./GameManager.ts","./PlayerController.ts"],(function(e){"use strict";var t,r,n,o,i,c,a,l,s,u,p;return{setters:[function(e){t=e.applyDecoratedDescriptor,r=e.inheritsLoose,n=e.defineProperty,o=e.assertThisInitialized,i=e.initializerDefineProperty},function(e){c=e.cclegacy,a=e._decorator,l=e.Node,s=e.Component},function(e){u=e.GameManager},function(e){p=e.PlayerController}],execute:function(){var f,y,d;c._RF.push({},"15185PUc+JILpfOwG/rR11N","InputController",void 0);var h=a.ccclass,v=a.property;e("InputController",h("InputController")((d=t((y=function(e){function t(){for(var t,r=arguments.length,c=new Array(r),a=0;a<r;a++)c[a]=arguments[a];return t=e.call.apply(e,[this].concat(c))||this,n(o(t),"myScore",void 0),i(o(t),"direction",d,o(t)),t}return r(t,e),t.prototype.start=function(){var e=this;this.node.on(l.EventType.TOUCH_START,(function(t){p.Instance.InputForMove(e.direction),e.myScore=u.Instance.AddScore(1)}),this)},t}(s)).prototype,"direction",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 0}}),f=y))||f);c._RF.pop()}}}));

System.register("chunks:///_virtual/PoolManager.ts",["./_rollupPluginModLoBabelHelpers.js","cc","./BombIcon.ts","./Bullet.ts","./Enemy.ts","./PlayerEnemy.ts","./Icons.ts"],(function(e){"use strict";var o,n,t,r,l,i,a,u,s,c,b,f,p,y,m,P,h,g,v;return{setters:[function(e){o=e.defineProperty,n=e.applyDecoratedDescriptor,t=e.inheritsLoose,r=e.assertThisInitialized,l=e.initializerDefineProperty},function(e){i=e.cclegacy,a=e._decorator,u=e.Prefab,s=e.Node,c=e.NodePool,b=e.instantiate,f=e.find,p=e.Vec3,y=e.Component},function(e){m=e.BombIcon},function(e){P=e.Bullet},function(e){h=e.Enemy},function(e){g=e.PlayerEnemy},function(e){v=e.Icons}],execute:function(){var I,d,E,z,w,O,B,C,S,_,j,M,T,L,D,x,A,F,H,N,R,k,G,K,V,q;i._RF.push({},"15194T6Cn1LKbHjA8ryPGz5","PoolManager",void 0);var J=a.ccclass,Q=a.property;e("PoolManager",(I=J("PoolManager"),d=Q({type:u}),E=Q({type:u}),z=Q({type:u}),w=Q({type:u}),O=Q({type:u}),B=Q({type:u}),C=Q({type:u}),S=Q({type:u}),_=Q({type:s}),I((q=V=function(e){function n(){for(var n,t=arguments.length,i=new Array(t),a=0;a<t;a++)i[a]=arguments[a];return n=e.call.apply(e,[this].concat(i))||this,o(r(n),"enemyPool",void 0),o(r(n),"bulletPool",void 0),o(r(n),"playerPool",void 0),o(r(n),"iconPool",void 0),o(r(n),"bombIconPool",void 0),l(r(n),"redEnemyPrefab",T,r(n)),l(r(n),"stoneEnemyPrefab",L,r(n)),l(r(n),"playerPrefab",D,r(n)),l(r(n),"amountOfPlayerEnim",x,r(n)),l(r(n),"amountOfEnemyToPool",A,r(n)),l(r(n),"bulletPrefab",F,r(n)),o(r(n),"_offSetforBullet",50),l(r(n),"amountOfBullet",H,r(n)),o(r(n),"canvas",void 0),l(r(n),"gunIcon",N,r(n)),l(r(n),"shieldIcon",R,r(n)),l(r(n),"bombIcon",k,r(n)),l(r(n),"speedIcon",G,r(n)),o(r(n),"_arrayOfIconObjects",[]),o(r(n),"_arrayOfEnemies",[]),l(r(n),"player",K,r(n)),n}t(n,e);var i=n.prototype;return i.start=function(){n.Instance=this},i.onLoad=function(){var e=this;this.enemyPool=new c("Enemy");for(var o=0;o<this.amountOfEnemyToPool;o++){var n=b(this.redEnemyPrefab),t=b(this.stoneEnemyPrefab);this._arrayOfEnemies.push(n,t),this._arrayOfEnemies.forEach((function(o){var n=o.getComponent(h);n&&n.SetPool&&n.SetPool(e.enemyPool),e.enemyPool.put(o)}))}this.bulletPool=new c("Bullet Pool");for(var r=0;r<this.amountOfBullet;r++){var l=b(this.bulletPrefab),i=l.getComponent(P);i&&i.SetPool&&i.SetPool(this.bulletPool),this.bulletPool.put(l)}this.playerPool=new c("Player Pool");for(var a=0;a<this.amountOfPlayerEnim;a++){var u=b(this.playerPrefab),s=u.getComponent(g);s&&s.SetPool&&s.SetPool(this.playerPool),this.playerPool.put(u)}this.iconPool=new c("Icon Pool");var f=b(this.gunIcon),p=b(this.shieldIcon),y=b(this.speedIcon);this._arrayOfIconObjects.push(f,p,y),this._arrayOfIconObjects.forEach((function(o){var n=o.getComponent(v);n&&n.SetPool&&n.SetPool(e.iconPool),e.iconPool.put(o)})),this.bombIconPool=new c("BombPool");var I=b(this.bombIcon),d=I.getComponent(m);d&&d.SetPool&&d.SetPool(this.bombIconPool),this.bombIconPool.put(I)},i.CreateEnemy=function(){if(this.enemyPool.size()>0)var e=this.enemyPool.get();else console.log("no more red enemy");return e},i.CreatePlayer=function(){if(this.playerPool.size()>0)var e=this.playerPool.get();else console.log("no more player");return e},i.CreateIcons=function(){if(this.iconPool.size()>0)var e=this.iconPool.get();else console.log("no more icons");return e},i.CreateBombIcons=function(){if(this.bombIconPool.size()>0){var e=this.bombIconPool.get();console.log("bombicon")}else console.log("no more bomb icons");return e},i.CreateBullet=function(){if(this.bulletPool.size()>0){var e=this.bulletPool.get(),o=f("Canvas");e.parent=o,e.position=new p(this.player.position.x,this.player.position.y+50,this.player.position.z)}else console.log("no more bullet")},n}(y),o(V,"Instance",null),T=n((M=q).prototype,"redEnemyPrefab",[d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),L=n(M.prototype,"stoneEnemyPrefab",[E],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),D=n(M.prototype,"playerPrefab",[z],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),x=n(M.prototype,"amountOfPlayerEnim",[Q],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 10}}),A=n(M.prototype,"amountOfEnemyToPool",[Q],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 10}}),F=n(M.prototype,"bulletPrefab",[w],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),H=n(M.prototype,"amountOfBullet",[Q],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 3}}),N=n(M.prototype,"gunIcon",[O],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),R=n(M.prototype,"shieldIcon",[B],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),k=n(M.prototype,"bombIcon",[C],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),G=n(M.prototype,"speedIcon",[S],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),K=n(M.prototype,"player",[_],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),j=M))||j));i._RF.pop()}}}));

System.register("chunks:///_virtual/Bullet.ts",["./_rollupPluginModLoBabelHelpers.js","cc","./GameManager.ts","./PoolObjects.ts"],(function(t){"use strict";var e,n,o,i,s,c,r,a,l;return{setters:[function(t){e=t.inheritsLoose,n=t.defineProperty,o=t.assertThisInitialized},function(t){i=t.cclegacy,s=t._decorator,c=t.Collider2D,r=t.Contact2DType},function(t){a=t.GameManager},function(t){l=t.PoolObjects}],execute:function(){var u;i._RF.push({},"22fc6X8mX9KOLcMEK6dGgbX","Bullet",void 0);var h=s.ccclass;s.property,t("Bullet",h("Bullet")(u=function(t){function i(){for(var e,i=arguments.length,s=new Array(i),c=0;c<i;c++)s[c]=arguments[c];return e=t.call.apply(t,[this].concat(s))||this,n(o(e),"_height",900),e}e(i,t);var s=i.prototype;return s.start=function(){var t=this.getComponent(c);t&&t.on(r.BEGIN_CONTACT,this.onBeginContact,this)},s.onBeginContact=function(t,e,n){2==e.tag&&(this._isHit=!0)},s.update=function(t){this.Moving(t),this._currentPos.y>this._height&&this.BackToPool(),this._isHit&&(a.Instance.AddScore(1),this.BackToPool())},i}(l))||u);i._RF.pop()}}}));

System.register("chunks:///_virtual/Bomb.ts",["./_rollupPluginModLoBabelHelpers.js","cc"],(function(e){"use strict";var t,o,i,n,r,s,c,p,u,l;return{setters:[function(e){t=e.applyDecoratedDescriptor,o=e.inheritsLoose,i=e.initializerDefineProperty,n=e.assertThisInitialized,r=e.defineProperty},function(e){s=e.cclegacy,c=e._decorator,p=e.Prefab,u=e.Vec3,l=e.Component}],execute:function(){var a,h,d,y,f;s._RF.push({},"330c3dPSHBPpZK3mvXXH2Mg","Bomb",void 0);var P=c.ccclass,_=c.property;e("Bomb",(a=P("Bomb"),h=_({type:p}),a((f=t((y=function(e){function t(){for(var t,o=arguments.length,s=new Array(o),c=0;c<o;c++)s[c]=arguments[c];return t=e.call.apply(e,[this].concat(s))||this,i(n(t),"explosion",f,n(t)),r(n(t),"_currentPos",void 0),r(n(t),"speed",2500),r(n(t),"explosionY",400),t}return o(t,e),t.prototype.update=function(e){this._currentPos=new u(this.node.position.x,this.node.position.y,this.node.position.z),this._currentPos.y+=this.speed*e,this._currentPos.y>this.explosionY&&this.node.destroy(),this.node.position=this._currentPos},t}(l)).prototype,"explosion",[h],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),d=y))||d));s._RF.pop()}}}));

System.register("chunks:///_virtual/PlayerEnemy.ts",["./_rollupPluginModLoBabelHelpers.js","cc","./PoolObjects.ts"],(function(t){"use strict";var n,e,o,i,r,s;return{setters:[function(t){n=t.inheritsLoose},function(t){e=t.cclegacy,o=t._decorator,i=t.Collider2D,r=t.Contact2DType},function(t){s=t.PoolObjects}],execute:function(){var c;e._RF.push({},"43b84eG78NA7JcOMCeL0m99","PlayerEnemy",void 0);var a=o.ccclass;o.property,t("PlayerEnemy",a("PlayerEnemy")(c=function(t){function e(){return t.apply(this,arguments)||this}n(e,t);var o=e.prototype;return o.start=function(){var t=this.getComponent(i);t&&t.on(r.BEGIN_CONTACT,this.onBeginContact,this)},o.onBeginContact=function(t,n,e){5!=n.tag&&"Bullet"!=n.node.name&&"OutOfBound"!=n.node.name&&"Bomb"!=n.node.name||(this._isHit=!0)},o.update=function(t){this.Moving(t),this._isHit&&this.BackToPool()},e}(s))||c);e._RF.pop()}}}));

System.register("chunks:///_virtual/GameManager.ts",["./_rollupPluginModLoBabelHelpers.js","cc"],(function(e){"use strict";var r,t,i,n,o,a,c,s,l,u,h;return{setters:[function(e){r=e.defineProperty,t=e.applyDecoratedDescriptor,i=e.inheritsLoose,n=e.initializerDefineProperty,o=e.assertThisInitialized},function(e){a=e.cclegacy,c=e._decorator,s=e.RichText,l=e.Node,u=e.director,h=e.Component}],execute:function(){var y,p,d,g,f,m,S,b,v,C,I,P;a._RF.push({},"4adceB/yvhLDr1sJbwTodtN","GameManager",void 0);var R=c.ccclass,w=c.property;e("GameManager",(y=R("GameManager"),p=w({type:s}),d=w({type:l}),g=w({type:l}),y((P=I=function(e){function t(){for(var t,i=arguments.length,a=new Array(i),c=0;c<i;c++)a[c]=arguments[c];return t=e.call.apply(e,[this].concat(a))||this,n(o(t),"score",S,o(t)),n(o(t),"PlayerBlueInside",b,o(t)),n(o(t),"PlayerRedInside",v,o(t)),r(o(t),"arrayOfTime",[]),r(o(t),"isChecked",!1),r(o(t),"colorChange",!1),r(o(t),"count",2),n(o(t),"myScore",C,o(t)),t}i(t,e);var a=t.prototype;return a.start=function(){t.Instance=this,this.score.string="Score: "+this.myScore.toString()},a.AddScore=function(e){return this.myScore+=e,this.score.string="Score: "+this.myScore.toString(),this.CheckScoreForColorChangeing(this.myScore),this.myScore},a.LoadGame=function(){u.loadScene("main")},a.CheckScoreForColorChangeing=function(e){e%20==0&&this.count%2==0?(this.colorChange=!0,this.PlayerBlueInside.active=!1,this.PlayerRedInside.active=!0,this.count++):e%20==0&&this.count%2!=0&&(this.colorChange=!1,this.PlayerBlueInside.active=!0,this.PlayerRedInside.active=!1,this.count++)},t}(h),r(I,"Instance",null),S=t((m=P).prototype,"score",[p],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),b=t(m.prototype,"PlayerBlueInside",[d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),v=t(m.prototype,"PlayerRedInside",[g],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),C=t(m.prototype,"myScore",[w],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 0}}),f=m))||f));a._RF.pop()}}}));

System.register("chunks:///_virtual/Explosion.ts",["./_rollupPluginModLoBabelHelpers.js","cc"],(function(i){"use strict";var t,e,s,n,o,a,c;return{setters:[function(i){t=i.defineProperty,e=i.inheritsLoose,s=i.assertThisInitialized},function(i){n=i.cclegacy,o=i._decorator,a=i.Vec3,c=i.Component}],execute:function(){var r,u,p;n._RF.push({},"5ebeaqC+UpEl6gg7qAkGSdI","Explosion",void 0);var h=o.ccclass;o.property,i("Explosion",h("Explosion")((p=u=function(i){function n(){for(var e,n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return e=i.call.apply(i,[this].concat(o))||this,t(s(e),"_curactiveTime",0),t(s(e),"_activeTime",.1),t(s(e),"isDamage",!1),t(s(e),"_startingPos",void 0),e}e(n,i);var o=n.prototype;return o.start=function(){n.Instace=this,this._startingPos=new a(this.node.position.x,this.node.position.y,this.node.position.z)},o.SetActiveDamage=function(){this.isDamage=!0},o.update=function(i){this.isDamage&&(this.node.position=new a(-50,400,0),this._curactiveTime+=i,this._curactiveTime>this._activeTime&&(this.node.position=this._startingPos,this._curactiveTime=0,this.isDamage=!1))},n}(c),t(u,"Instace",null),r=p))||r);n._RF.pop()}}}));

System.register("chunks:///_virtual/ColorChange.ts",["./_rollupPluginModLoBabelHelpers.js","cc","./GameManager.ts"],(function(e){"use strict";var o,t,r,n,a,i,c,l,u;return{setters:[function(e){o=e.applyDecoratedDescriptor,t=e.inheritsLoose,r=e.initializerDefineProperty,n=e.assertThisInitialized},function(e){a=e.cclegacy,i=e._decorator,c=e.Node,l=e.Component},function(e){u=e.GameManager}],execute:function(){var s,h,p,C,g,f,v;a._RF.push({},"95727SOyTpMNYLs27J1Zayu","ColorChange",void 0);var y=i.ccclass,m=i.property;e("ColorChange",(s=y("ColorChange"),h=m({type:c}),p=m({type:c}),s((f=o((g=function(e){function o(){for(var o,t=arguments.length,a=new Array(t),i=0;i<t;i++)a[i]=arguments[i];return o=e.call.apply(e,[this].concat(a))||this,r(n(o),"activeColor",f,n(o)),r(n(o),"colorToChange",v,n(o)),o}t(o,e);var a=o.prototype;return a.start=function(){},a.update=function(e){u.Instance.colorChange?this.ChangeColor():this.BackToNormal()},a.ChangeColor=function(){this.activeColor.active=!1,this.colorToChange.active=!0},a.BackToNormal=function(){this.activeColor.active=!0,this.colorToChange.active=!1},o}(l)).prototype,"activeColor",[h],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),v=o(g.prototype,"colorToChange",[p],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),C=g))||C));a._RF.pop()}}}));

System.register("chunks:///_virtual/PoolObjects.ts",["./_rollupPluginModLoBabelHelpers.js","cc","./InteractableObject.ts"],(function(t){"use strict";var o,e,c,i,n,s;return{setters:[function(t){o=t.inheritsLoose,e=t.defineProperty,c=t.assertThisInitialized},function(t){i=t.cclegacy,n=t._decorator},function(t){s=t.InteractableObject}],execute:function(){var r;i._RF.push({},"a495fSYaV1IMYfq14OcwMl4","PoolObjects",void 0);var l=n.ccclass;n.property,t("PoolObjects",l("PoolObjects")(r=function(t){function i(){for(var o,i=arguments.length,n=new Array(i),s=0;s<i;s++)n[s]=arguments[s];return o=t.call.apply(t,[this].concat(n))||this,e(c(o),"_pool",void 0),e(c(o),"_isHit",!1),o}o(i,t);var n=i.prototype;return n.SetPool=function(t){this._pool=t},n.OnObjectOut=function(t){void 0!==this._pool&&this._pool.put(t)},n.BackToPool=function(){this.OnObjectOut(this.node),this._isHit=!1},i}(s))||r);i._RF.pop()}}}));

System.register("chunks:///_virtual/Gun.ts",["./_rollupPluginModLoBabelHelpers.js","cc","./PoolManager.ts"],(function(e){"use strict";var t,i,n,c,r,u,s,l,o;return{setters:[function(e){t=e.defineProperty,i=e.applyDecoratedDescriptor,n=e.inheritsLoose,c=e.assertThisInitialized,r=e.initializerDefineProperty},function(e){u=e.cclegacy,s=e._decorator,l=e.Component},function(e){o=e.PoolManager}],execute:function(){var a,h,p,v,m;u._RF.push({},"c2864NvZw1CpLQO0xJH+i4H","Gun",void 0);var f=s.ccclass,T=s.property;e("Gun",f("Gun")((m=v=function(e){function i(){for(var i,n=arguments.length,u=new Array(n),s=0;s<n;s++)u[s]=arguments[s];return i=e.call.apply(e,[this].concat(u))||this,t(c(i),"curActiveTime",0),r(c(i),"activeTime",p,c(i)),t(c(i),"_timeBetweenBullets",2),t(c(i),"_curBulletTime",0),t(c(i),"gunIsActive",!1),i}n(i,e);var u=i.prototype;return u.start=function(){i.Instance=this},u.update=function(e){this.gunIsActive&&(this._curBulletTime+=e,this.curActiveTime+=e,this._curBulletTime>this._timeBetweenBullets&&(o.Instance.CreateBullet(),this._curBulletTime=0),this.curActiveTime>=this.activeTime&&(this.gunIsActive=!1,this.curActiveTime=0))},u.Shoot=function(){this.scheduleOnce((function(){o.Instance.CreateBullet()}),.2),this.gunIsActive=!0},u.SetCurTimer=function(){this.gunIsActive=!1,this.curActiveTime=0,this._curBulletTime=0},i}(l),t(v,"Instance",null),p=i((h=m).prototype,"activeTime",[T],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 5}}),a=h))||a);u._RF.pop()}}}));

System.register("chunks:///_virtual/PlayerController.ts",["./_rollupPluginModLoBabelHelpers.js","cc"],(function(e){"use strict";var t,i,o,n,s,r,h,c,a,l,d,_,u;return{setters:[function(e){t=e.defineProperty,i=e.applyDecoratedDescriptor,o=e.inheritsLoose,n=e.assertThisInitialized,s=e.initializerDefineProperty},function(e){r=e.cclegacy,h=e._decorator,c=e.Node,a=e.Vec3,l=e.Collider2D,d=e.Contact2DType,_=e.director,u=e.Component}],execute:function(){var v,p,g,f,m,S,M;r._RF.push({},"cfdfe3enOlE1YYirWWmaA8S","PlayerController",void 0);var y=h.ccclass,P=h.property;e("PlayerController",(v=y("PlayerController"),p=P({type:c}),v((M=S=function(e){function i(){for(var i,o=arguments.length,r=new Array(o),h=0;h<o;h++)r[h]=arguments[h];return i=e.call.apply(e,[this].concat(r))||this,t(n(i),"_moveDirection",void 0),t(n(i),"_isMoving",void 0),t(n(i),"_startToMove",void 0),t(n(i),"_curPos",void 0),t(n(i),"_step",100),t(n(i),"_targetPos",new a),t(n(i),"_curMoveTime",0),t(n(i),"_moveTime",.19),t(n(i),"_moveSpeed",500),t(n(i),"_angle",0),t(n(i),"_rotateSpeed",500),t(n(i),"_gridEndLeft",-400),t(n(i),"_gridEndRight",400),t(n(i),"shieldActive",!1),s(n(i),"shield",m,n(i)),t(n(i),"fastSpeed",!1),i}o(i,e);var r=i.prototype;return r.start=function(){i.Instance=this;var e=this.getComponent(l);e&&e.on(d.BEGIN_CONTACT,this.onBeginContact,this)},r.onBeginContact=function(e,t,i){"RedObstacles"!=t.node.name&&"StoneObstacles"!=t.node.name||this.shieldActive||_.loadScene("scene")},r.update=function(e){this.Moving(e)},r.Moving=function(e){if(this._startToMove)if(this._curMoveTime+=e,this._curMoveTime>this._moveTime)this.node.position=this._targetPos,this.node.setRotationFromEuler(new a(0,0,this._angle+90)),this._startToMove=!1,this.MoveEnd();else{this._curPos.x+=this._moveSpeed*e*this._moveDirection,this.node.position=this._curPos;var t=this.node.eulerAngles.z+this._rotateSpeed*-this._moveDirection*e;this.node.eulerAngles=new a(0,0,t),(this._curPos.x>this._gridEndRight||this._curPos.x<this._gridEndLeft)&&(console.log("out grid"),_.loadScene("scene"))}},r.MoveEnd=function(){this._isMoving=!1,this.node.setRotationFromEuler(new a(0,0,0))},r.InputForMove=function(e){this._isMoving||(this._moveDirection=e,this._curMoveTime=0,this._curPos=new a(this.node.position.x,this.node.position.y,this.node.position.z),a.add(this._targetPos,this._curPos,new a(this._step*e,0,0)),this._angle=this.node.eulerAngles.z,this._startToMove=!0,this._isMoving=!0)},r.SetActiveShield=function(){this.shieldActive=!0,this.shield.active=!0},r.SetNonActiveShield=function(){this.shieldActive=!1,this.shield.active=!1},r.SetFasterSpeed=function(){this._moveTime=.14,this._moveSpeed=600,this._rotateSpeed=800,this.fastSpeed=!0},r.SettNormalSpeed=function(){this._moveTime=.19,this._moveSpeed=500,this._rotateSpeed=500,this.fastSpeed=!1},i}(u),t(S,"Instance",null),m=i((f=M).prototype,"shield",[p],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),g=f))||g));r._RF.pop()}}}));

System.register("chunks:///_virtual/Spawner.ts",["./_rollupPluginModLoBabelHelpers.js","cc","./PoolManager.ts"],(function(t){"use strict";var e,r,n,a,o,s,i;return{setters:[function(t){e=t.inheritsLoose,r=t.defineProperty,n=t.assertThisInitialized},function(t){a=t.cclegacy,o=t._decorator,s=t.Component},function(t){i=t.PoolManager}],execute:function(){var h;a._RF.push({},"de134oHwARHSaBmEge51rqR","Spawner",void 0);var c,u=o.ccclass;o.property;!function(t){t[t.BT_NONE=0]="BT_NONE",t[t.BT_ENEMY=1]="BT_ENEMY",t[t.BT_PLAYER=2]="BT_PLAYER",t[t.BT_BOMBICONS=3]="BT_BOMBICONS",t[t.BT_ICONS=4]="BT_ICONS"}(c||(c={}));t("Spawner",u("Spawner")(h=function(t){function a(){for(var e,a=arguments.length,o=new Array(a),s=0;s<a;s++)o[s]=arguments[s];return e=t.call.apply(t,[this].concat(o))||this,r(n(e),"_timeBetweenSpawn",1),r(n(e),"_row",[]),r(n(e),"rowLength",8),r(n(e),"arrayOfPositionToSpawn",[]),r(n(e),"_curSpawnTime",0),e}e(a,t);var o=a.prototype;return o.onLoad=function(){this.arrayOfPositionToSpawn=[-350,-250,-150,-50,50,150,250,350]},o.start=function(){this.generateItemsByRow()},o.generateItemsByRow=function(){this._row=[],this._row.push(c.BT_NONE);var t=Math.floor(6*Math.random()+1);3==t||5==t?this._row.push(c.BT_ICONS):4==t?this._row.push(c.BT_BOMBICONS):1!=t&&2!=t&&6!=t||this._row.push(c.BT_ENEMY);for(var e=2;e<this.rowLength;e++)this._row.push(Math.floor(3*Math.random()));this.shuffle(this._row);for(var r=0;r<this._row.length;r++){var n=this.spawnByItemType(this._row[r]);n&&(this.node.addChild(n),n.setPosition(this.arrayOfPositionToSpawn[r],1e3,0))}},o.spawnByItemType=function(t){var e=null;switch(t){case c.BT_ENEMY:e=i.Instance.CreateEnemy();break;case c.BT_ICONS:e=i.Instance.CreateIcons();break;case c.BT_PLAYER:e=i.Instance.CreatePlayer();break;case c.BT_BOMBICONS:e=i.Instance.CreateBombIcons()}return e},o.shuffle=function(t){for(var e,r=t.length;0!=r;){e=Math.floor(Math.random()*r),r--;var n=[t[e],t[r]];t[r]=n[0],t[e]=n[1]}return t},o.update=function(t){this._curSpawnTime+=t,this._curSpawnTime>=this._timeBetweenSpawn&&(this.generateItemsByRow(),this._curSpawnTime=0)},a}(s))||h);a._RF.pop()}}}));

System.register("chunks:///_virtual/BombIcon.ts",["./_rollupPluginModLoBabelHelpers.js","cc","./Explosion.ts","./PoolObjects.ts"],(function(t){"use strict";var i,n,o,e,r,s,a,c,l,p,u,b,f,h,m;return{setters:[function(t){i=t.applyDecoratedDescriptor,n=t.inheritsLoose,o=t.initializerDefineProperty,e=t.assertThisInitialized,r=t.defineProperty},function(t){s=t.cclegacy,a=t._decorator,c=t.Prefab,l=t.Vec3,p=t.Collider2D,u=t.Contact2DType,b=t.instantiate,f=t.find},function(t){h=t.Explosion},function(t){m=t.PoolObjects}],execute:function(){var g,v,y,B,d,C,x;s._RF.push({},"e0841dfzulCX74YV1BIa4w7","BombIcon",void 0);var _=a.ccclass,I=a.property;t("BombIcon",(g=_("BombIcon"),v=I({type:c}),y=I({type:c}),g((C=i((d=function(t){function i(){for(var i,n=arguments.length,s=new Array(n),a=0;a<n;a++)s[a]=arguments[a];return i=t.call.apply(t,[this].concat(s))||this,o(e(i),"bombSprites",C,e(i)),o(e(i),"explosionVFX",x,e(i)),r(e(i),"isExploding",!1),r(e(i),"curPosOfBomb",new l),r(e(i),"bombObject",null),i}n(i,t);var s=i.prototype;return s.start=function(){var t=this.getComponent(p);t&&t.on(u.BEGIN_CONTACT,this.onBeginContact,this)},s.onBeginContact=function(t,i,n){5==i.tag?(this.initBombSprite(),this.initExplosionVFX(),h.Instace.SetActiveDamage(),this._isHit=!0):4==i.tag&&(this._isHit=!0)},s.initBombSprite=function(){var t=b(this.bombSprites),i=f("Canvas");t.parent=i,t.position=new l(-50,-390,0)},s.initExplosionVFX=function(){var t=b(this.explosionVFX),i=f("Canvas");t.parent=i,t.position=new l(-50,400,0)},s.update=function(t){this.Moving(t),this._isHit&&this.BackToPool()},i}(m)).prototype,"bombSprites",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),x=i(d.prototype,"explosionVFX",[y],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),B=d))||B));s._RF.pop()}}}));

System.register("chunks:///_virtual/InteractableObject.ts",["./_rollupPluginModLoBabelHelpers.js","cc"],(function(t){"use strict";var e,i,n,r,o,c,s,a,u;return{setters:[function(t){e=t.defineProperty,i=t.applyDecoratedDescriptor,n=t.inheritsLoose,r=t.assertThisInitialized,o=t.initializerDefineProperty},function(t){c=t.cclegacy,s=t._decorator,a=t.Vec3,u=t.Component}],execute:function(){var l,p,h,f,y;c._RF.push({},"f4682uWQ9NLI407imr1uiyg","InteractableObject",void 0);var b=s.ccclass,d=s.property;t("InteractableObject",b("InteractableObject")((y=f=function(t){function i(){for(var i,n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return i=t.call.apply(t,[this].concat(c))||this,e(r(i),"_currentPos",void 0),o(r(i),"movingDirection",h,r(i)),i}return n(i,t),i.prototype.Moving=function(t){this._currentPos=new a(this.node.position.x,this.node.position.y,this.node.position.z),this._currentPos.y-=i.SPEED*this.movingDirection*t,this.node.position=this._currentPos},i}(u),e(f,"SPEED",200),h=i((p=y).prototype,"movingDirection",[d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 1}}),l=p))||l);c._RF.pop()}}}));

System.register("chunks:///_virtual/Enemy.ts",["./_rollupPluginModLoBabelHelpers.js","cc","./PoolObjects.ts"],(function(t){"use strict";var n,o,e,i,c,s;return{setters:[function(t){n=t.inheritsLoose},function(t){o=t.cclegacy,e=t._decorator,i=t.Collider2D,c=t.Contact2DType},function(t){s=t.PoolObjects}],execute:function(){var r;o._RF.push({},"fc8efczabVGWazb4VWioF3T","Enemy",void 0);var u=e.ccclass;e.property,t("Enemy",u("Enemy")(r=function(t){function o(){return t.apply(this,arguments)||this}n(o,t);var e=o.prototype;return e.start=function(){var t=this.getComponent(i);t&&t.on(c.BEGIN_CONTACT,this.onBeginContact,this)},e.onBeginContact=function(t,n,o){"Bullet"!=n.node.name&&"Bomb"!=n.node.name&&"OutOfBound"!=n.node.name||(this._isHit=!0)},e.update=function(t){this.Moving(t),this._isHit&&this.BackToPool()},o}(s))||r);o._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./GameManager.ts","./Explosion.ts","./InteractableObject.ts","./PoolObjects.ts","./BombIcon.ts","./Bullet.ts","./Enemy.ts","./PlayerEnemy.ts","./PoolManager.ts","./Gun.ts","./PlayerController.ts","./Icons.ts","./InputController.ts","./Bomb.ts","./ColorChange.ts","./Spawner.ts"],(function(){"use strict";return{setters:[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});