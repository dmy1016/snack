import Food from "./Food";
import ScorePanel from "./ScorePanel";
import Snack from "./Snack";
class GameControl{
    food:Food
    scorePanel:ScorePanel
    Snack:Snack

    direction:string = '' // 当前方向
    constructor() {
        this.food = new Food()
        this.Snack = new Snack()
        this.scorePanel = new ScorePanel()
        this.init() // 创建对象之后就会触发初始化
    }
    init(){
        document.addEventListener('keydown',this.keyDownHandler.bind(this)) // 初始化给按下绑定一个事件
        // 这里bind作用：因为js中的this是谁调用了就是谁的this这里是document调用的所以this为document我们是改变不了this.direction的所以应该使用bind方法生成一个新函数并且this指向当前这个类
    }
    keyDownHandler(event:KeyboardEvent){ // 参数为 event对象
        this.direction = event.key
        console.log(this.direction)
    }
}

export default GameControl