import openfl.display.Sprite;
import openfl.display.Stage;

class App extends Sprite {
	public function new() {
		super();
	}

	public static function main(){
		var stage = new Stage(550, 400, 0xFFFFFF, App);
		js.Browser.document.body.appendChild(stage.element);
	}
}