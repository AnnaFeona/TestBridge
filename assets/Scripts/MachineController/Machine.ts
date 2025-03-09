import { _decorator, Component, Input, input, Node, Vec3 } from "cc";
const { ccclass, property } = _decorator;

@ccclass("Machine")
export class Machine extends Component {
  properties: {
    Camera_Base: Node;
    newProp: Number;
  };
  private _carPosition: Vec3;
  start() {
    input.on(Input.EventType.MOUSE_DOWN, this.onMouseDown, this);
    input.on(Input.EventType.TOUCH_START, this.onMouseDown, this);

    console.log("Machine start");
  }

  update(deltaTime: number) {}

  onMouseDown(e) {
    this._carPosition = this.node.position;
    this._carPosition.x += 10;
    this.node.setPosition(this._carPosition);
    console.log(e, this.node.position);
  }
}
