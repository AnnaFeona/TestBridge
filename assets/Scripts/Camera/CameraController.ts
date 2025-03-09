import { _decorator, Component, Node } from "cc";
const { ccclass, property } = _decorator;

@ccclass("CameraController")
export class CameraController extends Component {
  start() {
    console.log(this.node.children);
  }

  update(deltaTime: number) {}
}
