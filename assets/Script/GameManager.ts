
import { _decorator, Component, Node, RichText, director, find, Prefab, instantiate, Vec3, ProgressBar } from 'cc';
const { ccclass, property } = _decorator;

 
@ccclass('GameManager')
export class GameManager extends Component {
    public static Instance: GameManager = null;

    //----FOR GAMEPLAY-----//
    @property({type: RichText})
    public score: RichText|null = null;

    @property({type: Node})
    public PlayerBlueInside: Node|null = null;

    @property({type: Node})
    public PlayerRedInside: Node|null = null;

    //not sure what are these?
    public arrayOfTime: number[] = []; 
    public isChecked: boolean = false;
    //

    //for color changing
    public colorChange: boolean = false;
    public count: number = 2;
    public isRed: boolean = false;
    public isBlue: boolean = true;

    @property({ type: ProgressBar })
    public timerBar: ProgressBar;

    @property
    public myScore = 0;

    private colorScore: number;

    start () {
        GameManager.Instance = this;
        this.score.string = this.myScore.toString();

    }

    AddScore(addedScore: number) 
    {
        this.myScore+= addedScore;
        this.score.string = this.myScore.toString();
        //console.log(this.myScore);
        
        return this.myScore;
    }

    AddProgressBar()
    {
        this.timerBar.progress += 0.05;
        this.colorScore = this.timerBar.progress;
        // console.log(this.colorScore);
        this.CheckScoreForColorChangeing(this.colorScore);
    }

    LoadGame()
    {
        director.loadScene("main");
    }

    //changing player's color
    CheckScoreForColorChangeing(score: number)
    {
        if (score >= 1 && this.count % 2 == 0) //red active
        {
            this.colorChange = true;
            this.PlayerBlueInside.active = false;
            this.PlayerRedInside.active = true;
            this.count++;
            this.timerBar.progress = 0;
            this.isRed = true;
            this.isBlue = false;
        }  

        else if (score >= 1 && this.count % 2 != 0) //blue active
        {
            this.colorChange = false;
            this.PlayerBlueInside.active = true;
            this.PlayerRedInside.active = false;
            this.count++;
            this.timerBar.progress = 0;
            this.isRed = false;
            this.isBlue = true;
        }
    
    }
}

