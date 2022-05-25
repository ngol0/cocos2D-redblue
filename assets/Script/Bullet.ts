
import { _decorator, Component, Node, Vec3, NodePool, Collider2D, Contact2DType, IPhysics2DContact } from 'cc';
import { GameManager } from './GameManager';
import { PoolObjects } from './PoolObjects';
const { ccclass, property } = _decorator;

 
@ccclass('Bullet')
export class Bullet extends PoolObjects  {
    private _height: number = 760;

    start () {
        //collider
        let collider = this.getComponent(Collider2D);
        if (collider) {
            collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
        }
    }

    //when bullet collides with enemies
    onBeginContact(selfCollider: Collider2D, otherCollider: Collider2D, contact: IPhysics2DContact | null) 
    {
        if (otherCollider.tag == 2) //tag2: red and stone enemies
        {
            //destroy bullet
            this._isHit = true;
        }
    }

    update (deltaTime: number) {

        this.MoveWithSpeed(deltaTime, 400);

        if (this._currentPos.y > this._height)
        {
            this.BackToPool();
        }
        if (this._isHit)
        {
            GameManager.Instance.AddScore(1);
            this.BackToPool();
        }
       
    }
}

