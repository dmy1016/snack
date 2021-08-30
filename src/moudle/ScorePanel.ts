// 初始化计分板
class ScorePanel{
    score:number = 0 // 分数
    level:number = 1 // 等级
    scoreEle:HTMLElement // 承载分数的元素
    levelEle:HTMLElement // 承载等级的元素
    maxLevel:number // 等级不写死
    upScore:number // 每几分升一级也不要写死
    constructor(maxLevel:number=10,upScore:number=10) {
        this.scoreEle = document.getElementById('score')! // 将元素绑定给this.scoreEle
        this.levelEle = document.getElementById('level')! // 将元素绑定给this.levelEle
        this.maxLevel = maxLevel
        this.upScore = upScore
    }
    // 加分并且显示到元素上
    addScore(){
        this.scoreEle.innerHTML = ++this.score + ''
        if(this.score % this.upScore === 0){ // 每十分加一个level
            this.levelUp()
        }
    }
    levelUp(){
        if(this.level < this.maxLevel){
            this.levelEle.innerHTML = ++this.level + ''
        }
    }
}
export default ScorePanel;