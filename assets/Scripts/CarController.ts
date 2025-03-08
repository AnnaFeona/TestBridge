import { _decorator, Component, Input, input, Node } from "cc";
const { ccclass, property } = _decorator;

@ccclass("CarController")
export class CarController extends Component {
  start() {
    console.log("hello");

    input.on(
      Input.EventType.TOUCH_START,
      (e) => {
        this.move();
        console.log(this, e);
      },
      this
    );
  }

  update(deltaTime: number) {
    // console.log(deltaTime);
  }

  move() {}
}
