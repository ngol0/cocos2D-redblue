
import { _decorator, Component, Node, instantiate, NodePool, Prefab, Vec3, v3, Canvas, game, find } from 'cc';
import { BombIcon } from './BombIcon';
import { BossBullet } from './BossBullet';
import { Bullet } from './Bullet';
import { Enemy } from './Enemy';
import { Icons } from './Icons';
const { ccclass, property } = _decorator;

@ccclass('PoolManager')
export class PoolManager extends Component {
    public static Instance: PoolManager = null;

    //pool variables
    public enemyPool: NodePool;
    public bulletPool: NodePool;
    public bossBulletPool: NodePool;
    public playerPool: NodePool;
    public iconPool: NodePool;
    public bombIconPool: NodePool;

    //red enemy
    @property({ type: Prefab })
    public redEnemyPrefab: Prefab | null = null;

    //stone enemy
    @property({ type: Prefab })
    public stoneEnemyPrefab: Prefab | null = null;

    //player
    @property({ type: Prefab })
    public playerPrefab: Prefab | null = null;

    //amount to pool all three objects above
    @property
    public amountOfPlayerEnim: number = 10;

    @property
    public amountOfEnemyToPool: number = 10;

    //bullet
    @property({ type: Prefab })
    public bulletPrefab: Prefab | null = null;

    @property({ type: Prefab })
    public bossBulletPrefab: Prefab | null = null;

    private _offSetforBullet: number = 50;

    @property
    public amountOfBullet: number = 3;

    //cavas
    canvas: Canvas;

    //ICON
    @property({ type: Prefab })
    public gunIcon: Prefab | null = null;

    @property({ type: Prefab })
    public shieldIcon: Prefab | null = null;

    @property({ type: Prefab })
    public bombIcon: Prefab | null = null;

    @property({ type: Prefab })
    public speedIcon: Prefab | null = null;

    private _arrayOfIconObjects: Node[] = [];
    private _arrayOfEnemies: Node[] = [];

    @property({ type: Node })
    public player: Node | null = null;

    @property({ type: Node })
    public boss: Node | null = null;

    //singleton
    start() {
        PoolManager.Instance = this;
    }

    //create a pool
    onLoad() {
        //create enemy pool that has both stone and different color enemy
        this.enemyPool = new NodePool('Enemy');
        for (let i = 0; i < this.amountOfEnemyToPool; i++) {
            let redEnemy = instantiate(this.redEnemyPrefab);
            let stoneEnemy = instantiate(this.stoneEnemyPrefab);

            this._arrayOfEnemies.push(redEnemy, stoneEnemy);

            this._arrayOfEnemies.forEach(element => {
                let enemyComponent = element.getComponent(Enemy);
                if (enemyComponent && enemyComponent.SetPool) {
                    enemyComponent.SetPool(this.enemyPool);
                }
                this.enemyPool.put(element);
            });
        }


        //create bullet pool
        this.bulletPool = new NodePool('Bullet Pool');
        for (let k = 0; k < this.amountOfBullet; k++) {
            let bullet = instantiate(this.bulletPrefab);
            let bulletComponent = bullet.getComponent(Bullet);
            if (bulletComponent && bulletComponent.SetPool) {
                bulletComponent.SetPool(this.bulletPool);
            }
            this.bulletPool.put(bullet);
        }

        //create player pool that has enemy same color as player
        this.playerPool = new NodePool('Player Pool');
        for (let n = 0; n < this.amountOfPlayerEnim; n++) {
            let player = instantiate(this.playerPrefab);
            let playerComponent = player.getComponent(Enemy);
            if (playerComponent && playerComponent.SetPool) {
                playerComponent.SetPool(this.playerPool);
            }
            this.playerPool.put(player);
        }

        //create icon pool that has 1 for each icon type
        this.iconPool = new NodePool('Icon Pool');
        let gunicon = instantiate(this.gunIcon);
        let shieldicon = instantiate(this.shieldIcon);
        let speedicon = instantiate(this.speedIcon);

        this._arrayOfIconObjects.push(gunicon, shieldicon, speedicon);

        this._arrayOfIconObjects.forEach(element => {
            let iconComponent = element.getComponent(Icons);
            if (iconComponent && iconComponent.SetPool) {
                iconComponent.SetPool(this.iconPool);
            }
            this.iconPool.put(element);
        });

        this.bombIconPool = new NodePool('BombPool')
        let bombicon = instantiate(this.bombIcon);
        let bombComponent = bombicon.getComponent(BombIcon);
        if (bombComponent && bombComponent.SetPool) {
            bombComponent.SetPool(this.bombIconPool);
        }
        this.bombIconPool.put(bombicon);

        this.bossBulletPool = new NodePool('Boss Bullet Pool')
        for (let l = 0; l < this.amountOfBullet; l++) {
            let bossBullet = instantiate(this.bossBulletPrefab);
            let bossBulletComp = bossBullet.getComponent(BossBullet);
            if (bossBulletComp && bossBulletComp.SetPool) {
                bossBulletComp.SetPool(this.bossBulletPool);
            }
            this.bossBulletPool.put(bossBullet);
        }
    }

    //create enemy from pool
    CreateEnemy() {
        if (this.enemyPool.size() > 0) // use size method to check if there're nodes available in the pool
        {
            var enemy = this.enemyPool.get();
            //enemy.parent = parentNode;
            //enemy.position = v3(0, 0, 0);
        }
        else {
            //enemy = instantiate(this.redEnemyPrefab); // if not enough node in the pool, we call instantiate to create node
            console.log('no more red enemy');
        }
        return enemy;
    }

    //create player
    CreatePlayer() {
        if (this.playerPool.size() > 0) // use size method to check if there're nodes available in the pool
        {
            var player = this.playerPool.get();
        }
        else {
            console.log('no more player');
        }

        return player;
    }

    //create icons
    CreateIcons() {
        if (this.iconPool.size() > 0) // use size method to check if there're nodes available in the pool
        {
            var icons = this.iconPool.get();
        }
        else {
            console.log('no more icons');
        }
        return icons;
    }

    CreateBombIcons() {
        if (this.bombIconPool.size() > 0) // use size method to check if there're nodes available in the pool
        {
            var bombicon = this.bombIconPool.get();
            console.log('bombicon');
        }
        else {
            console.log('no more bomb icons');
        }
        return bombicon;
    }

    //create bullet
    CreateBullet() {
        if (this.bulletPool.size() > 0) // use size method to check if there're nodes available in the pool
        {
            var bullet = this.bulletPool.get();
            var rootNode = find("Canvas");
            bullet.parent = rootNode;
            bullet.position = new Vec3(this.player.position.x, this.player.position.y + 50, this.player.position.z);
        }
        else {
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
        }
        else {
            console.log('no more boss bullet');
        }
    }
}
