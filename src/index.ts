import './style/index.less' // 将less样式文件引入进来打包时会自动给到index.html
let age:number
import Food from "./moudle/Food";
import ScorePanel from "./moudle/ScorePanel";

const score = new ScorePanel()
for(let i:number=0;i<200;i++){
    score.addScore()
}