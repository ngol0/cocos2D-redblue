
import { _decorator, Component, Node, Collider2D, Contact2DType, IPhysics2DContact, Vec3 } from 'cc';
const { ccclass, property } = _decorator;
 
@ccclass('Explosion')
export class Explosion extends Component {

    public static Instace: Explosion = null;

    private _curactiveTime: number = 0;
    private _activeTime: number = 0.1;

    private isDamage: boolean = false;

    private _startingPos: Vec3;


    start()
    {
        Explosion.Instace = this;

        this._startingPos = new Vec3(this.node.position.x, this.node.position.y, this.node.position.z);
    }

    SetActiveDamage()
    {
        this.isDamage = true;
    }

    update(deltaTime: number)
    {
        if (this.isDamage)
        {
            this.node.position = new Vec3(-50, 400, 0);

            this._curactiveTime += deltaTime;

            if (this._curactiveTime > this._activeTime)
            {
                this.node.position = this._startingPos;
                this._curactiveTime = 0;
                this.isDamage = false;
            }
        }
    }
}
