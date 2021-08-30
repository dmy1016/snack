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
        this.head.style.left = value + 'px'
    }
    // 蛇尾坐标的设置
    set Y(value){
        this.head.style.top = value + 'px'
    }
    // 增加身体
    addBody(){
        this.element.insertAdjacentHTML("beforeend", "<div></div>") // 给某一个位置添加元素
        // 给蛇容器的结尾标签之前添加div 也就是添加蛇的身体
    }
}

export default Snack