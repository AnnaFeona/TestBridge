import { _decorator, Component, Node } from "cc";
const { ccclass, property } = _decorator;

@ccclass("NewComponent")
export class NewComponent extends Component {
  start() {
    console.log("script 2", this.node);
  }

  update(deltaTime: number) {}
}
