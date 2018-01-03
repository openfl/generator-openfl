var Stage = require ("openfl/display/Stage").default;


var App = function () {
	
	Sprite.call (this);
	
	
	
}

App.prototype = Sprite.prototype;


var stage = new Stage (550, 400, 0xFFFFFF, App);
document.body.appendChild (stage.element);