
import { _decorator, Component, Node, Prefab, Vec3, Contact2DType, Collider2D, instantiate, IPhysics2DContact, find } from 'cc';
import { InteractableObject } from './InteractableObject';
const { ccclass, property } = _decorator;
 
@ccclass('Bomb')
export class Bomb extends InteractableObject {

    @property({type: Prefab})
    public explosion: Prefab|null = null;
    
    //private  _currentPos: Vec3;
    private _speed: number = 2500;

    private explosionY: number = 400;


    update (deltaTime: number) {

        this.MoveWithSpeed(deltaTime, this._speed);

        if (this._currentPos.y > this.explosionY)
        {
            this.node.destroy();
        }
    }
}
