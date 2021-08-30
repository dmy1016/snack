import './style/index.less' // 将less样式文件引入进来打包时会自动给到index.html
let age:number

// 创建一个食物类
class Food{
    element:HTMLElement
    constructor() {
        this.element = document.getElementById('food')! // 如果不加叹号前面会报错，因为不确定你是否能获取到这个元素，但是我们很肯定有这个元素所以加一个叹号表示肯定有这个元素
    }
    /* 如果蛇的位置和食物的上偏移和左偏移是一样的那么证明已经吃到了 */
    get X(){ // 获取X坐标
        return this.element.offsetLeft
    }
    get Y(){ // 获取Y坐标
        return this.element.offsetTop
    }
    change(){ // 食物移动的方法 因为我们的蛇是 10*10 所以食物的坐标也要是以10为单位 (10,10) (20,10) 这种 要不吃不到的
        const left:number = Math.round(Math.random()*29)*10 // 获取一个0到29的整数(包含头尾)
        const top:number = Math.round(Math.random()*29)*10
        // 改变食物位置(样式)
        this.element.style.left = left + 'px'
        this.element.style.top = top + 'px'
    }
}
const food = new Food()
console.log(food.X,food.Y)
food.change()