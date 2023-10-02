import Sprite from "openfl/display/Sprite";
import Stage from "openfl/display/Stage";

class App extends Sprite {
	constructor() {
		super();
	}
}

const stage = new Stage(550, 400, 0xFFFFFF, App);
document.body.appendChild(stage.element);