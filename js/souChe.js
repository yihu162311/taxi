//数组forEach方法补丁
Array.prototype.forEach = function(callback){
	var a = 0,
		len = this.length;
	while(a < len){
		callback(this[a], a++, this);
	}
};

//数组map方法补丁
Array.prototype.map = function(callback){
	var a = 0,
		len = this.length,
		result = [];
	while(a <len){
		result.push(callback(this[a],a++,this));
	}
	return result;
}
/*轮播图*/
var bannerData = [
	{
		url:"./img/banner1.jpg",
		title:"广告",
		href:"/ad"
	},
	{
		url:"./img/banner2.jpg",
		title:"大风车",
		href:"/dfc"
	},
	{
		url:"./img/banner3.jpg",
		title:"车牛",
		href:"/cn"
	},
];

/*封装轮播插件*/
function createBanner(option){
	var data = option.data,
		dataLen = data.length,
		element = document.getElementById(option.element),
		fragment = document.createDocumentFragment(),
		a = 0,
		images = data.map(function(item){
			return fragment.appendChild(createImage(item));
		}),
		timer = createTimer();
	function createImage(option){
		var a = document.createElement("a");
		a.href = option.href;
		a.title = option.title;
		a.style.backgroundImage = "url("+option.url+")";
		return a;
	}
	function createTimer(){
		return setInterval(function(){
			var _a = a;
			a = a >= dataLen-1 ? 0 : a+1;
			images[_a].className = "";
			images[a].className = "current";
		},4000)
	}
	function createButton(className){
		var i = document.createElement("i");
		i.className = "icon " + className;
		i.onclick = function(){
			clearInterval(timer);
			timer = createTimer();
			var _a = a;
			if(className === "previous"){
				a = a > 0 ? a-1 : dataLen - 1;
			}else{
				a = a >= dataLen-1 ? 0 : a+1;
			}
			images[_a].className = null;
			images[a].className = "current";
		};
		return i;
	}
	images[a].className = "current";
	
	//创建左右按钮
	fragment.appendChild(createButton("previous"));
	fragment.appendChild(createButton("next"));
	element.appendChild(fragment);
}

createBanner({
	element:"banner",
	data:bannerData
});

/*车展览*/
function createBox(option){
	var a = document.createElement("a");
	a.style.backgroundImage = "url("+option.bigUrl+")";
	a.href = option.href;
	
}

var exhibitionData = [
	{
		href:"/a",
		bigUrl:"./img/exhibition.jpg",
		smallUrl:"./img/logo.png",
		title:"豪车不止BBA",
		label:"德系三驾马车,是时候退位让贤啦"
	},
	{
		href:"/a",
		bigUrl:"./img/exhibition.jpg",
		smallUrl:"./img/logo.png",
		title:"豪车不止BBA",
		label:"德系三驾马车,是时候退位让贤啦"
	},
	{
		href:"/a",
		bigUrl:"./img/exhibition.jpg",
		smallUrl:"./img/logo.png",
		title:"豪车不止BBA",
		label:"德系三驾马车,是时候退位让贤啦"
	},
	{
		href:"/a",
		bigUrl:"./img/exhibition.jpg",
		smallUrl:"./img/logo.png",
		title:"豪车不止BBA",
		label:"德系三驾马车,是时候退位让贤啦"
	},
	{
		href:"/a",
		bigUrl:"./img/exhibition.jpg",
		smallUrl:"./img/logo.png",
		title:"豪车不止BBA",
		label:"德系三驾马车,是时候退位让贤啦"
	},
	{
		href:"/a",
		bigUrl:"./img/exhibition.jpg",
		smallUrl:"./img/logo.png",
		title:"豪车不止BBA",
		label:"德系三驾马车,是时候退位让贤啦"
	},
	
]

















