import {
  _decorator,
  Camera,
  Component,
  Input,
  input,
  Node,
  RigidBody,
  Vec3,
} from "cc";
import { gameState } from "./state";
const { ccclass, property } = _decorator;

@ccclass("CarController")
export class CarController extends Component {
  @property(RigidBody) rigidBody: RigidBody = null;

  private force: Vec3 = new Vec3(0, 0, 0);
  start() {
    if (!this.rigidBody) {
      this.rigidBody = this.node.getComponent(RigidBody);
    }
    this.rigidBody.mass = gameState.carMass;
  }

  update(deltaTime: number) {
    const { isLeverActive } = gameState;

    if (isLeverActive) {
      this.moveCar(deltaTime);
    }
  }

  moveCar(dt: number) {
    const { carSpeed } = gameState;
    const x = carSpeed * dt;
    this.force = new Vec3(carSpeed, 0, 0);

    this.rigidBody.applyImpulse(this.force);

    // this.rigidBody.applyForce(this.force);
    // this.node.position = this.node.position.add(new Vec3(x, 0, 0));
  }
}
