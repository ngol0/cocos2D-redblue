
import { _decorator, Component, Node, Collider2D, IPhysics2DContact, Contact2DType, Prefab, Script, CCClass } from 'cc';
import { GameManager } from './GameManager';
import { Gun } from './Gun';
import { PlayerController } from './PlayerController';
import { PoolObjects } from './PoolObjects';
const { ccclass, property } = _decorator;


@ccclass('Icons')
export class Icons extends PoolObjects {

    start() {
        //collider
        let collider = this.getComponent(Collider2D);
        if (collider) {
            collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
        }
    }

    update(deltaTime: number) {

        this.Moving(deltaTime);

        if (this._isHit) {
            GameManager.Instance.AddScore(1);
            this.BackToPool();
        }

    }

    onBeginContact(selfCollider: Collider2D, otherCollider: Collider2D, contact: IPhysics2DContact | null) {
        //tag1: gun icon
        //tag3: bombicon
        //tag7: shield icon
        //tag8: speed icon

        if (selfCollider.tag == 6 && otherCollider.tag == 5) { //gun
            if (Gun.Instance.gunIsActive) //if icon is hit before, second icon will reset the timer
                Gun.Instance.SetCurTimer();
            //else
            Gun.Instance.Shoot(); //shooting

            this._isHit = true;
            console.log('gun hit player');
        }

        else if (selfCollider.tag == 7 && otherCollider.tag == 5) { //shield
            PlayerController.Instance.SetActiveShield();

            this._isHit = true;
            console.log('shield hit player');
        }

        else if (selfCollider.tag == 8 && otherCollider.tag == 5) { //speed
            PlayerController.Instance.SetFasterSpeed();            

            this._isHit = true;
            console.log('speed hit player');
        }

        else if (otherCollider.tag == 4) //tag4: outofbound
        {
            //kill enemy
            this._isHit = true;
        }
    }
}
