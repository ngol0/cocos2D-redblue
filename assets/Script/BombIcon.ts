
import { _decorator, Component, Node, Prefab, Collider2D, Contact2DType, IPhysics2DContact, instantiate, find, Vec3, DebugMode, RigidBody2D } from 'cc';
import { Explosion } from './Explosion';
import { PoolObjects } from './PoolObjects';
const { ccclass, property } = _decorator;

@ccclass('BombIcon')
export class BombIcon extends PoolObjects {

    @property({ type: Prefab })
    public bombSprites: Prefab | null = null;

    @property({ type: Prefab })
    public explosionVFX: Prefab | null = null;

    public isExploding: boolean = false;

    curPosOfBomb: Vec3 = new Vec3();

    bombObject: Node = null;

    start() {
        //collider
        let collider = this.getComponent(Collider2D);
        if (collider) {
            collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
        }
    }

    onBeginContact(selfCollider: Collider2D, otherCollider: Collider2D, contact: IPhysics2DContact | null) {
        if (otherCollider.tag == 5) {
            //spawn bomb
            this.initBombSprite();
            this.initExplosionVFX();

            Explosion.Instace.SetActiveDamage();

            this._isHit = true;
        }
        else if (otherCollider.tag == 4) {
            this._isHit = true;
        }
    }

    private initBombSprite() {
        let bombObject = instantiate(this.bombSprites);
        var rootNode = find("Canvas");
        bombObject.parent = rootNode;
        bombObject.position = new Vec3(-50, -390, 0);
    }

    private initExplosionVFX() {
        let explosionVFX = instantiate(this.explosionVFX);
        var rootNode = find("Canvas");
        explosionVFX.parent = rootNode;
        explosionVFX.position = new Vec3(-50, 400, 0);

    }

    update(deltaTime) {
        this.Moving(deltaTime);

        if (this._isHit) {
            this.BackToPool();
        }
    }
}
