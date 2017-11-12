
var board = document.querySelector('#board');
var launch = document.querySelector('#launch');
var clear = document.querySelector('#clear');
var text = document.querySelector('#i-box');

// 随机色
function c() {
	var r = parseInt(Math.random() * 255);
	var g = parseInt(Math.random() * 255);
	var b = parseInt(Math.random() * 255);
	return "rgb(" + r + "," + g + "," + b + ")"
}

// 随机top
function t() {
	return Math.random() * 750 + 'px';
}

// 动画animation属性填写
function rand() {
	return 'move' + ' ' + (parseInt(Math.random() * 10 + 15)) + 's' + ' ' + 'infinite' + ' ' + 'ease';
}

// 绑定事件到发射按钮，创建一个p元素，并给他添加样式
launch.addEventListener('click', function () {
	var barrage = document.createElement('p');
	barrage.innerText = text.value;
	barrage.style.color = c();                           // 添加随机色
	barrage.style.position = 'absolute';                 // 让弹幕p元素脱离文档流
	barrage.style.top = t();                             // 添加随机top
	barrage.style.animation = rand();                    // 添加动画属性
	barrage.style.whiteSpace = 'nowrap';                 // 不换行
	text.value = '';
	board.appendChild(barrage);
})

// 绑定事件给清理按钮
clear.addEventListener('click', function () {
	board.innerHTML = '';
})