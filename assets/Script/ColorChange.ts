
import { _decorator, Component, Node } from 'cc';
import { GameManager } from './GameManager';
const { ccclass, property } = _decorator;
 
@ccclass('ColorChange')
export class ColorChange extends Component {
    
    @property({type: Node})
    public activeColor: Node|null = null;

    @property({type: Node})
    public colorToChange: Node|null = null;

    start () {
        // [3]
    }

    update (deltaTime: number) {
        
        if (GameManager.Instance.colorChange)
        {
            this.ChangeColor();
        }
        else
        {
            this.BackToNormal();
        }
    }

    ChangeColor()
    {
        this.activeColor.active = false;
        this.colorToChange.active = true;
    }

    BackToNormal()
    {
        this.activeColor.active = true;
        this.colorToChange.active = false;
    }
}
