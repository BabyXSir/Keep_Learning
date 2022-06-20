var style = document.createElement("style");
style.innerHTML = `* {  margin: 0;  padding: 0;}.block-outer {z-index: 9999;  position: fixed;  right: 20px;  bottom: 20px;  width: 70px;  height: 70px;  opacity: 0.2;  border-radius: 50%;  overflow: hidden;  background-color: cadetblue;  transition: .4s;}.block-outer .toggle {  display: block;  position: absolute;  width: 100%;  height: 100%;  line-height: 70px;  color: #fff;  font-size: 18px;  text-align: center;  transition: .3s;  z-index: 100;  background-color: cadetblue;  cursor: pointer;}.block-outer .toggle::after {  display: block;  position: absolute;  left: 0;  top: 0;  width: 100%;  height: 100%;  line-height: 70px;  color: #fff;  font-size: 18px;  text-align: center;  content: "Snake"}.block-outer:hover {  opacity: 1;}.block-outer.unfold {  width: 400px;  height: 400px;  border-radius: 0;  opacity: 1;}.block-outer.unfold .toggle {  top: 10px;  right: 10px;  width: 30px;  height: 30px;  line-height: 30px; background:none;}.block-outer.unfold .toggle::after {  content: "+";  line-height: 30px;  font-size: 30px;  font-weight: 200;  transform: rotate(45deg);  opacity: 0;}.block-outer.unfold:hover .toggle::after {  opacity: 1;}.board {  width: 400px;  height: 400px;  background-color: cadetblue;}.unit {  width: 20px;  height: 20px;  position: absolute;  background-color: bisque;}`
document.head.appendChild(style)
var outer = document.createElement("div");
outer.classList.add("block-outer")
outer.innerHTML = `<div class="block-outer--board" ><div class="unit"></div></div><div class="toggle" onclick="unfold()"></div>`
document.body.appendChild(outer);
var snake = [20 + 2, 20 + 3, 20 + 4,], toDirection = 'right', direction = 'right', start = false, isUnfold = false, stop = false, board = document.getElementsByClassName("block-outer--board")[0], keyMap = { 119: 'up', 115: 'down', 97: 'left', 100: 'right' }, food = 130, gameRunner, speed = 100;
var eventMap = {
  43: () => { speed /= 1.1; resetRunner() }, 45: () => { speed *= 1.1; resetRunner() }, 32: () => (stop = !stop) ? (clearInterval(gameRunner) && (gameRunner = null)) : runGame()
};
function resetRunner() {
  clearInterval(gameRunner);
  gameRunner = null;
  runGame();
}
board.innerHTML = snake.reduce((res, item) => res + `<div class="unit" style="left:${(item - 1) % 20 * 20}px;top:${Math.floor((item - 1) / 20) * 20}px;"></div>`, '')// 初始化渲染
document.onkeypress = e => {
  isUnfold // 是否展开
  ?(start  // 是否开始
    ? (keyMap[e.keyCode] // 是否是上下左右键 
      ? (toDirection = keyMap[e.keyCode]) 
      : (eventMap[e.keyCode] // 是否属于事件键
        ? eventMap[e.keyCode]() 
        : '')) 
    : init()) 
  : '' }// 键盘事件
function createFood() { snake.indexOf(food = Math.floor(20 * 20 * Math.random())) == -1 ? true : createFood() }// 创建新果实
function init() {// 启动游戏
  console.log('init');
  snake = [22, 23, 24,], start = true, direction = 'right', toDirection = "right";// 初始化信息
  board.innerHTML = snake.reduce((res, item) => res + `<div class="unit" style="left:${(item - 1) % 20 * 20}px;top:${Math.floor((item - 1) / 20) * 20}px;"></div>`, '')// 初始化渲染
  runGame();
}
function runGame() {
  console.log('runGame');
  gameRunner = setInterval(() => {
    if (!isUnfold) return false;
    direction = { 'up': 'down', 'down': 'up', 'left': 'right', 'right': 'left', }[direction] == toDirection ? direction : toDirection
    var nextUnit = snake[snake.length - 1] + { up: -20, down: 20, left: -1, right: 1 }[direction]
    if ((snake[snake.length - 1] % 20 == 0 && direction == 'right') || (snake[snake.length - 1] % 20 == 1 && direction == 'left') || (snake[snake.length - 1] / 20 < 1 && direction == 'up') || (snake[snake.length - 1] / 20 > 19 && direction == 'down') || snake.indexOf(nextUnit) != -1) { // 判断输没
      clearInterval(gameRunner);
      gameRunner = null;
      start = false;
      return alert("GOOD GAME!");// 游戏结束
    }
    nextUnit == food ? (createFood()) : (snake.shift());// 判断是否吃到果实
    snake.push(snake[snake.length - 1] + { up: -20, down: 20, left: -1, right: 1 }[direction]);// 添加新坐标
    board.innerHTML = [food, ...snake].reduce((res, item) => res + `<div class="unit" style="left:${(item - 1) % 20 * 20}px;top:${Math.floor((item - 1) / 20) * 20}px;"></div>`, '')// 渲染
  }, speed)
}
function unfold() {
  document.getElementsByClassName("block-outer")[0].classList.toggle("unfold");
  (isUnfold = !isUnfold) ? (eventMap[32]) : (clearInterval(gameRunner))
}