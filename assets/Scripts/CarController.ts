import { _decorator, Component, Input, input, Node, Vec3 } from "cc";
import { gameState } from "./state";
const { ccclass, property } = _decorator;

@ccclass("CarController")
export class CarController extends Component {
  start() {}

  update(deltaTime: number) {
    const { isLeverActive } = gameState;

    if (isLeverActive) {
      this.moveCar(deltaTime);
    }
  }

  moveCar(dt: number) {
    const { carSpeed } = gameState;
    const x = carSpeed * dt;

    this.node.position = this.node.position.add(new Vec3(x, 0, 0));
  }
}
