
import { _decorator, Component, Node, Collider2D, Contact2DType, IPhysics2DContact, director } from 'cc';
import { PoolObjects } from './PoolObjects';
const { ccclass, property } = _decorator;
 
@ccclass('BossBullet')
export class BossBullet extends PoolObjects {

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
        if (otherCollider.tag == 5)
        {
            //destroy bullet
            director.loadScene('scene');
        }
        if (otherCollider.node.name == "OutOfBound")
        {
            this._isHit = true;
        }
    }

    update (deltaTime: number) {

        this.MoveWithSpeed(deltaTime, 400);
        if (this._isHit)
        {
            this.BackToPool();
        }
       
    }
}
