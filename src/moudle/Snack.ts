class Snack{
    head:HTMLElement
    bodies:HTMLCollection
    element:HTMLElement
    constructor() {
        this.element = document.getElementById('snack')! // 蛇容器
        this.head = document.querySelector('#snack > div') as HTMLElement  // 获取snack容器中的第一个div也就是蛇头
        this.bodies = this.element.getElementsByTagName('div') // 获得蛇身包括头部
    }
    get X(){ // 获取蛇头坐标X
        return this.head.offsetLeft
    }
    get Y(){ // 获取蛇头坐标Y
        return this.head.offsetTop
    }
    // 蛇头坐标的设置
    set X(value){
        if(value === this.X){ // 在游戏控制类中 我们每次都是同时设置两个值，但是如果蛇只是横着走那么X并没有变化所以就不要设置了
            return
        }
        if(value < 0 || value > 290){ // 蛇可以移动的范围 （横向）
            throw new Error('蛇撞墙了')
        }
        this.head.style.left = value + 'px'
    }
    // 蛇尾坐标的设置
    set Y(value){
        if(this.Y === value){
            return
        }
        if(value < 0 || value > 290){ // 蛇可以移动的范围 （横向）
            throw new Error('蛇撞墙了')
        }
        this.head.style.top = value + 'px'
    }
    // 增加身体
    addBody(){
        this.element.insertAdjacentHTML("beforeend", "<div></div>") // 给某一个位置添加元素
        // 给蛇容器的结尾标签之前添加div 也就是添加蛇的身体
    }
}

export default Snack