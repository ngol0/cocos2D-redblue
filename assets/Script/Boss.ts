
import { _decorator, Component, Node, Vec3, Collider2D, Contact2DType, IPhysics2DContact, find, Prefab, instantiate, Pool, ProgressBar } from 'cc';
import { GameManager } from './GameManager';
import { PoolManager } from './PoolManager';
import { Spawner } from './Spawner';
const { ccclass, property } = _decorator;


@ccclass('Boss')
export class Boss extends Component {

    //Moving
    private curPos: Vec3;
    private speed: number = 500;

    private moveDown: boolean = true;
    private moveUp: boolean = false;
    private moveLeft: boolean = true;
    private moveRight: boolean = false;

    private bossPosY: number = 500;
    private bossPosLeft: number = -250;
    private bossPosRight: number = 250;
    private bossStartingPoint: number = 750;

    // //Health
    private health: number = 20;

    @property({ type: ProgressBar })
    public timerBar: ProgressBar;

    //Shooting
    public shoot: boolean = false;
    private timeToShoot: number = 2;
    private curTimeToShoot: number = 0;

    start() {
        this.curPos = new Vec3(this.node.position.x, this.node.position.y, this.node.position.z);

        //collider
        let collider = this.getComponent(Collider2D);
        if (collider) {
            collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
        }
    }

    //when enemy collides with bullets
    onBeginContact(selfCollider: Collider2D, otherCollider: Collider2D, contact: IPhysics2DContact | null) {
        if (otherCollider.node.name == "Bullet") {
            this.ProcessHit();
        }
    }

    update(deltaTime) {
        this.Move(deltaTime);
        this.Shoot(deltaTime);
    }

    private Shoot(deltaTime: number) {
        if (this.shoot) {
            this.curTimeToShoot += deltaTime;
            if (this.curTimeToShoot >= this.timeToShoot) {
                PoolManager.Instance.CreateBossBullet();
                this.curTimeToShoot = 0;
            }
        }
    }

    private Move(deltaTime: number) {
        if (this.moveDown) {
            this.curPos.y -= deltaTime * this.speed;
            if (this.node.position.y <= this.bossPosY) {
                this.moveDown = false;
                PoolManager.Instance.CreateBossBullet();
                this.timerBar.node.active = true;
                this.shoot = true;
            }
            this.node.position = this.curPos;
        }

        if (this.moveUp) {
            this.curPos.y += deltaTime * this.speed;
            if (this.node.position.y >= this.bossStartingPoint) {
                this.moveUp = false;
                //this.moveDown = true;
                Spawner.Instance.SetNonActiveBoss();
                this.SetNonActiveBoss();
                this.timerBar.progress = 1;
                this.health = 20;
            }
        }

        if (this.moveLeft) {
            this.curPos.x -= deltaTime * this.speed;
            if (this.node.position.x <= this.bossPosLeft) {
                this.moveLeft = false;
                this.moveRight = true;
            }
            this.node.position = this.curPos;
        }

        if (this.moveRight) {
            this.curPos.x += deltaTime * this.speed;
            if (this.node.position.x >= this.bossPosRight) {
                this.moveLeft = true;
                this.moveRight = false;
            }
            this.node.position = this.curPos;
        }
    }

    SetActiveBoss() {
        this.scheduleOnce(function () {
            this.node.active = true;
            this.moveDown = true;
            this.moveLeft = true;
        }, 10);
    }

    SetNonActiveBoss() {
        this.node.active = false;
        this.moveDown = false;
        this.moveLeft = false;
    }

    ProcessHit() {
        this.health -= 10;
        this.timerBar.progress = this.timerBar.progress - 0.5;
        console.log(this.health);

        if (this.health <= 0) {
            GameManager.Instance.AddScore(100);
            this.moveUp = true;
            this.shoot = false;
            this.timerBar.node.active = false;
        }
    }
}

