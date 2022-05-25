
import { _decorator, Component, Node } from 'cc';
import { GameManager } from './GameManager';
import { PlayerController } from './PlayerController';
const { ccclass, property } = _decorator;

@ccclass('InputController')
export class InputController extends Component {

    //public myScore: number;

    @property
    public direction: number = 0;

    start () {
       this.node.on(Node.EventType.TOUCH_START, (event: any) => 
        {
            PlayerController.Instance.InputForMove(this.direction);
            GameManager .Instance.AddProgressBar();
            GameManager.Instance.AddScore(1);
            
        }, this);
    }

}
