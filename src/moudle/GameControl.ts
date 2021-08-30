import Food from "./Food";
import ScorePanel from "./ScorePanel";
import Snack from "./Snack";
class GameControl{
    food:Food
    scorePanel:ScorePanel
    Snack:Snack

    direction:string = 'Right' // 当前方向
    isLive:boolean = true // 是否活着
    constructor() {
        this.food = new Food()
        this.Snack = new Snack()
        this.scorePanel = new ScorePanel()
        this.init() // 创建对象之后就会触发初始化
    }
    init(){
        document.addEventListener('keydown',this.keyDownHandler.bind(this)) // 初始化给按下绑定一个事件
        // 这里bind作用：因为js中的this是谁调用了就是谁的this这里是document调用的所以this为document我们是改变不了this.direction的所以应该使用bind方法生成一个新函数并且this指向当前这个类
        this.run()
    }
    keyDownHandler(event:KeyboardEvent){ // 参数为 event对象
        this.direction = event.key
    }
    run(){
        let X = this.Snack.X
        let Y = this.Snack.Y
        switch (this.direction){
            case "ArrowUp":
            case "Up":
                Y -= 10
                break
            case "ArrowDown":
            case "Down":
                Y += 10
                break
            case "ArrowLeft":
            case "Left":
                X -= 10
                break
            case "ArrowRight":
            case "Right":
                X += 10
                break
        }
        this.checkEat()
        // 撞墙的异常捕获
        try{
            this.Snack.X = X
            this.Snack.Y = Y
        }catch(e){
            alert('Game Over')
            this.isLive = false // 当超出范围则停止游戏将isLive设置为false
        }
        this.isLive && setTimeout(this.run.bind(this),300-(this.scorePanel.level - 1)*30) // 初始化时，使蛇动起来默认向右，1级时 默认就是300 (1-1)*30=0 2级时，(2-1)*30=30 速度变为27
        // 只有蛇活着才能再次移动
    }
    checkEat(){ // 检查是否吃到食物
        if(this.Snack.X === this.food.X && this.Snack.Y === this.food.Y){ // 如果蛇吃到食物（蛇坐标与食物坐标重合）
            this.food.change() // 改变食物的位置
            this.scorePanel.addScore() // 加一分
            this.Snack.addBody() // 增加身体
        }
    }
}

export default GameControl