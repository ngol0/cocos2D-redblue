
import { _decorator , Node, NodePool} from 'cc';
import { InteractableObject } from './InteractableObject';
const { ccclass, property } = _decorator;
 
@ccclass('PoolObjects')
export abstract class PoolObjects extends InteractableObject {

    protected _pool: NodePool;
    protected _isHit: boolean = false;

    SetPool(pool) {
        this._pool = pool;
    }

    OnObjectOut(object: Node)
    {
        if (this._pool !== undefined)
        {
            this._pool.put(object);
        }
    }

    BackToPool() {       
        this.OnObjectOut(this.node);
        this._isHit = false;
    }
}
