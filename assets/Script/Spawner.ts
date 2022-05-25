
import { _decorator, Component, Node, instantiate, debug, Prefab, Vec3, find } from 'cc';
import { Boss } from './Boss';
import { PoolManager } from './PoolManager';
const { ccclass, property } = _decorator;

enum ItemType {
    BT_NONE, //0
    BT_ENEMY, //1
    BT_PLAYER, //2
    BT_BOMBICONS, //3
    BT_ICONS //4
};

@ccclass('Spawner')
export class Spawner extends Component {

    //---FOR SPAWNING ENEMIES AND ICONS---//
    public static Instance: Spawner = null;
    private _timeBetweenSpawn: number = 1; //distance between spawning is 1 block
    private _row: number[] = []; //grid to spawn
    public rowLength: Number = 8; //number of grid to spawn
    private _arrayOfPositionToSpawn: number[] = [];
    private _curSpawnTime: number = 0; //to count down for 1 block between spawning

    //--FOR BOSS--//
    public bossSpawning: boolean = false;
    private _oneTime: boolean = false;
    private _count: number = 0;
    private _timeForBoss: number = 5;

    @property({ type: Node })
    public bossNode: Node | null = null;

    //--DEFAULT METHODS--//
    onLoad() {
        Spawner.Instance = this;
        this._arrayOfPositionToSpawn = [-350, -250, -150, -50, 50, 150, 250, 350];
    }

    start() {
        this.generateItemsByRow();
    }

    //---GENERATE ITEMS BY ROW---//
    //generate only enemies
    private generateItemsByRow() {

        this._row = [];
        if (!this.bossSpawning) { //if not spawning boss, generate enemies
            this._row.push(ItemType.BT_NONE); //making sure array always have at least one 0

            let roll = Math.floor(Math.random() * 6 + 1);

            if (roll == 3 || roll == 5) //randomly choose a number - if it is 3 or 5 or 4, spawns an icon
                this._row.push(ItemType.BT_ICONS);

            else if (roll == 4)
                this._row.push(ItemType.BT_BOMBICONS);

            else if (roll == 1 || roll == 2 || roll == 6)
                this._row.push(ItemType.BT_ENEMY);

            for (let i = 2; i < this.rowLength; i++)
                this._row.push(Math.floor(Math.random() * 3)); //0 to 2

        }
        else { //else, generate icons only
            this._row.push(ItemType.BT_ICONS);

            for (let i = 1; i < this.rowLength; i++)
                this._row.push(ItemType.BT_NONE);

        }
        // for (let n = 0; n < this.rowLength; n++)
        //     console.log(this._row[n]);

        this.shuffle(this._row); //shuffle the contents of array
        this.spawnItems();
    }

    private spawnItems() {
        for (let j = 0; j < this._row.length; j++) {
            let item: Node = this.spawnByItemType(this._row[j]); //spawning items
            if (item) {
                this.node.addChild(item);
                item.setPosition(this._arrayOfPositionToSpawn[j], 760, 0);
            }
        }
    }

    spawnByItemType(type: ItemType) {

        let block: Node | null = null;
        switch (type) {
            case ItemType.BT_ENEMY:
                block = PoolManager.Instance.CreateEnemy();
                break;
            case ItemType.BT_ICONS:
                block = PoolManager.Instance.CreateIcons();
                break;
            case ItemType.BT_PLAYER:
                block = PoolManager.Instance.CreatePlayer();
                break;
            case ItemType.BT_BOMBICONS:
                block = PoolManager.Instance.CreateBombIcons();
                break;
        }

        return block;
    }

    shuffle(array) {
        let currentIndex = array.length, randomIndex;

        // While there remain elements to shuffle.
        while (currentIndex != 0) {

            // Pick a remaining element.
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            // And swap it with the current element.
            [array[currentIndex], array[randomIndex]] = [
                array[randomIndex], array[currentIndex]];
        }

        return array;
    }

    ///---UPDATE---//
    update(deltaTime: number) {

        this._curSpawnTime += deltaTime;
        if (this._curSpawnTime >= this._timeBetweenSpawn) {
            this.generateItemsByRow();
            this._curSpawnTime = 0;
            this._count++;
        }

        if (this._count > this._timeForBoss) {
            this.bossSpawning = true;
            if (!this._oneTime) {
                this.bossNode.getComponent(Boss).SetActiveBoss();
                this._oneTime = true;
            }
        }
    }

    //---BOSS METHODS---//
    SetNonActiveBoss() {
        this.bossSpawning = false;
        this._count = 0;
        this._oneTime = false;
    }
}
