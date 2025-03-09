import { _decorator, Component, Node, Vec3 } from "cc";
const { ccclass, property } = _decorator;

@ccclass("CameraController")
export class CameraController extends Component {
  @property(Node) car: Node = null;

  @property
  smoothSpeed: number = 5;
  start() {}

  update(deltaTime: number) {
    // const deltaX = this.car.position.x - this.node.position.x;
    // this.node.position.add(new Vec3(deltaX, 0, 0));
  }
}
