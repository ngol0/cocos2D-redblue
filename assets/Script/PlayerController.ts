
import { _decorator, Component, Node, Vec3, Collider2D, Contact2DType, IPhysics2DContact, director, BoxCollider2D, Vec2, math } from 'cc';
import { GameManager } from './GameManager';
const { ccclass, property } = _decorator;


@ccclass('PlayerController')
export class PlayerController extends Component {

    public static Instance: PlayerController = null;

    //position var
    private _moveDirection: number;
    private _isMoving: boolean;
    private _startToMove: boolean;
    private _curPos: Vec3;
    private _step = 100; //one block
    private _targetPos: Vec3 = new Vec3();
    private _curMoveTime: number = 0;
    private _moveTime: number = 0.19;
    private _moveSpeed: number = 500;

    // //rotation var
    private _angle: number = 0;
    private _rotateSpeed: number = 500;

    //grid stats
    private _gridEndLeft: number = -400;
    private _gridEndRight: number = 400;

    //FOR SHIELD
    public shieldActive: boolean = false;

    @property({ type: Node })
    public shield: Node | null = null;

    //FOR SPEED
    public fastSpeed: boolean = false;

    private _iconActiveTime: number = 8;


    //--Collision with enenmy--//
    start() {

        PlayerController.Instance = this;

        let collider = this.getComponent(Collider2D);
        if (collider) {
            collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
        }

    }

    onBeginContact(selfCollider: Collider2D, otherCollider: Collider2D, contact: IPhysics2DContact | null) {
        if (GameManager.Instance.isBlue) {
            if (otherCollider.node.name == "RedObstacles" || otherCollider.node.name == "StoneObstacles") {
                // //when shield is inactive
                if (!this.shieldActive) {
                    director.loadScene('scene');
                }
            }
        }
        else if (GameManager.Instance.isRed) {
            if (otherCollider.node.name == "PlayerEnemy" || otherCollider.node.name == "StoneObstacles") {
                // //when shield is inactive
                if (!this.shieldActive) {
                    director.loadScene('scene');
                }
            }
        }
    }

    //--PLAYER'S MOVEMENT--//
    //tweening
    update(deltaTime: number) {
        this.Moving(deltaTime);

    }

    public Moving(deltaTime: number) {
        if (this._startToMove) {
            this._curMoveTime += deltaTime;
            if (this._curMoveTime > this._moveTime) {
                //end
                this.node.position = this._targetPos;
                this.node.setRotationFromEuler(new Vec3(0, 0, this._angle + 90));
                this._startToMove = false;
                this.MoveEnd();
            }
            else //tween and rotate
            {
                //tween
                this._curPos.x += this._moveSpeed * deltaTime * this._moveDirection;
                this.node.position = this._curPos;

                //rotate
                let newRotation = this.node.eulerAngles.z + this._rotateSpeed * -this._moveDirection * deltaTime;
                this.node.eulerAngles = new Vec3(0, 0, newRotation);

                //check to see if the player is still in grid
                if (this._curPos.x > this._gridEndRight || this._curPos.x < this._gridEndLeft) {
                    console.log('out grid');
                    director.loadScene('scene');
                }
            }
        }
    }

    //make sure that next move only starts when prev move finishes
    MoveEnd() {
        this._isMoving = false;
        this.node.setRotationFromEuler(new Vec3(0, 0, 0));
    }

    //move left or right
    InputForMove(direction: number) {
        if (this._isMoving) { return; }

        //left -1 right 1
        this._moveDirection = direction;

        //set current move time
        this._curMoveTime = 0;

        //set target position
        this._curPos = new Vec3(this.node.position.x, this.node.position.y, this.node.position.z);
        Vec3.add(this._targetPos, this._curPos, new Vec3(this._step * direction, 0, 0));

        //targetAngle
        this._angle = this.node.eulerAngles.z;

        this._startToMove = true;
        this._isMoving = true;
    }

    //  //--FOR SHIELD--//
    SetActiveShield() {
        this.shieldActive = true;
        this.shield.active = true;

        this.scheduleOnce(function () {

            this.SetNonActiveShield();

        }, this._iconActiveTime);
    }

    SetNonActiveShield() {
        this.shieldActive = false;
        this.shield.active = false;
    }

    //--FOR SPEED--//
    SetFasterSpeed() {
        this._moveTime = 0.16;
        this._moveSpeed = 600;
        this._rotateSpeed = 700;
        this.fastSpeed = true;

        this.scheduleOnce(function () {

            this.SettNormalSpeed();

        }, this._iconActiveTime);
    }

    SettNormalSpeed() {
        this._moveTime = 0.19;
        this._moveSpeed = 500;
        this._rotateSpeed = 500;
        this.fastSpeed = false;
    }
}

