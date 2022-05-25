
import { _decorator, Component, Node, Collider2D, Contact2DType, Vec3, IPhysics2DContact } from 'cc';
const { ccclass, property } = _decorator;

 
@ccclass('InteractableObject')
export abstract class InteractableObject extends Component {

    protected _currentPos: Vec3;

    @property
    protected movingDirection: number = 1;

    protected static SPEED: number = 200;

    public Moving(deltaTime: number) {
        this._currentPos = new Vec3(this.node.position.x, this.node.position.y, this.node.position.z);
        this._currentPos.y -= InteractableObject.SPEED * this.movingDirection * deltaTime;
        this.node.position = this._currentPos;
    }

    public MoveWithSpeed(deltaTime: number, speed: number)
    {
        this._currentPos = new Vec3(this.node.position.x, this.node.position.y, this.node.position.z);
        this._currentPos.y -= speed * this.movingDirection * deltaTime;
        this.node.position = this._currentPos;
    }
}
