
import { _decorator, Component, Node, KeyCode, EventKeyboard, SystemEventType, systemEvent } from 'cc';
import { GameManager } from './GameManager';
import { PlayerController } from './PlayerController';
const { ccclass, property } = _decorator;

@ccclass('InputController')
export class InputController extends Component {

    //public myScore: number;

    @property
    public direction: number = 0;

    start() {
        systemEvent.on(SystemEventType.KEY_DOWN, this.onKeyDown, this);
        this.node.on(Node.EventType.TOUCH_START, (event: any) => {
            PlayerController.Instance.InputForMove(this.direction);
            this.UpdateScores();

        }, this);
    }

    private UpdateScores() {
        GameManager.Instance.AddProgressBar();
        GameManager.Instance.AddScore(1);
    }

    onKeyDown(event: EventKeyboard) {
        // if (GameController.Instance.isLost || GameController.Instance.isPaused) return;

        switch (event.keyCode) {
            case KeyCode.ARROW_LEFT:
            case KeyCode.KEY_A:
                PlayerController.Instance.InputForMove(-1);
                this.UpdateScores();
                break;
            case KeyCode.ARROW_RIGHT:
            case KeyCode.KEY_D:
                PlayerController.Instance.InputForMove(1);
                this.UpdateScores();
                break;
        }
    }

}
