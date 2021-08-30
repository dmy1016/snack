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
        if(this.bodies.length > 1){ // 这个判断是为了不让蛇进行反向移动 比如蛇在往右不能让它往左
            console.log(value,(this.bodies[1] as HTMLElement).offsetLeft)
            if(value === (this.bodies[1] as HTMLElement).offsetLeft){ // 如果你当前移动的这个值和你身体格子的第一个格子相等证明你在调头
                if(value > this.X){ // 如果你调头的位置是向右 那么让你继续往左走
                    value = this.X - 10
                }else {
                    value = this.X + 10
                }
            }
        }
        this.moveBody()
        this.head.style.left = value + 'px'
        // 当设置完left偏移 检查是否撞上身体
        this.checkHeadBody()
    }
    // 蛇尾坐标的设置
    set Y(value){
        if(this.Y === value){
            return
        }
        if(value < 0 || value > 290){ // 蛇可以移动的范围 （横向）
            throw new Error('蛇撞墙了')
        }
        if(this.bodies.length > 1){
            if(value === (this.bodies[1] as HTMLElement).offsetTop){
                if(value > this.Y){ // 如果你调头的位置是向下 那么让你继续往上走
                    value = this.Y - 10
                }else {
                    value = this.Y + 10
                }
            }
        }
        this.moveBody()
        this.head.style.top = value + 'px'
        // 当设置完top偏移 检查是否撞上身体
        this.checkHeadBody()
    }
    // 增加身体
    addBody(){
        this.element.insertAdjacentHTML("beforeend", "<div></div>") // 给某一个位置添加元素
        // 给蛇容器的结尾标签之前添加div 也就是添加蛇的身体
    }
    // 移动身体
    moveBody(){
        for(let i = this.bodies.length-1;i>0;i--){ // 蛇的移动无非就是将后面的一节设置为前面的一节 然后依次类推
            console.log(this.bodies)
            // 循环为：i刚开始是蛇容器的整个长度减1
            // 注释为循环第一次执行
            let x = (this.bodies[i-1] as HTMLElement).offsetLeft; // 获取蛇容器倒数第二个身体格子的X坐标
            let y = (this.bodies[i-1] as HTMLElement).offsetTop;  // 获取蛇容器倒数第二个身体格子的Y坐标
            (this.bodies[i] as HTMLElement).style.left = x + 'px'; // 蛇的最后一个身体格子的坐标设置为倒数第二个的X坐标
            (this.bodies[i] as HTMLElement).style.top = y + 'px';  // 蛇的最后一个身体格子的坐标设置为倒数第二个的Y坐标
            // 这样 蛇头只要动那么其它
        }
    }
    // 检查蛇头是否与身体相撞
    checkHeadBody(){
        for(let i=1;i<this.bodies.length;i++){
            let bd = this.bodies[i] as HTMLElement
            if(this.X === bd.offsetLeft && this.Y === bd.offsetTop){ // 如果设置完的蛇头的X与Y的坐标与 身体中的某一个身体格子重合 则就是撞上了
                throw new Error('撞上了')
            }
        }
    }
}

export default Snack
