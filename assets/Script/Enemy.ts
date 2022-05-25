
import { _decorator, Component, Node, Vec3, NodePool, Contact2DType, Collider2D, IPhysics2DContact, director } from 'cc';
import { PoolObjects } from './PoolObjects';
const { ccclass, property } = _decorator;

 
@ccclass('Enemy')
export class Enemy extends PoolObjects {

    start () {
        //collider
        let collider = this.getComponent(Collider2D);
        if (collider) {
            collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
        }
    }

    //when enemy collides with bullets or bomb
    onBeginContact(selfCollider: Collider2D, otherCollider: Collider2D, contact: IPhysics2DContact | null) 
    {
        if (otherCollider.node.name == "Bullet" || otherCollider.node.name == "Bomb" || otherCollider.node.name == "OutOfBound" || otherCollider.tag == 5)
        {
            //kill enemy
            this._isHit = true;
        }
    }

    update (deltaTime: number) {

        this.Moving(deltaTime);

        if (this._isHit)
            //if enemy node is out of bound/hit by bullet/hit by bomb - return to pool and set the position back to 0,0,0
            this.BackToPool();
    }
}

