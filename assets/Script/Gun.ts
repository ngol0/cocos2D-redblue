
import { _decorator, Component, Node, Pool } from 'cc';
import { PoolManager } from './PoolManager';
const { ccclass, property } = _decorator;

@ccclass('Gun')
export class Gun extends Component {

    protected curActiveTime: number = 0;

    @property
    activeTime: number = 5;

    public static Instance: Gun = null;

    private _timeBetweenBullets: number = 2;
    private _curBulletTime: number = 0;

    public gunIsActive: boolean = false;

    start() {
        Gun.Instance = this;
    }

    update(deltaTime: number) {
        if (this.gunIsActive) {
            this._curBulletTime += deltaTime;
            this.curActiveTime += deltaTime;

            if (this._curBulletTime > this._timeBetweenBullets) //shoot every 2 secs
            {
                PoolManager.Instance.CreateBullet();
                this._curBulletTime = 0;
            }

            if (this.curActiveTime >= this.activeTime)   //stop shooting after 10 secs
            {
                this.gunIsActive = false;
                this.curActiveTime = 0;
            }
        }
    }

    Shoot() {

        this.scheduleOnce(function () {
            // Here this refers to component
            PoolManager.Instance.CreateBullet();
        }, 0.2);

        this.gunIsActive = true;
    }

    SetCurTimer() {
        this.gunIsActive = false;
        this.curActiveTime = 0;
        this._curBulletTime = 0;
    }
}

