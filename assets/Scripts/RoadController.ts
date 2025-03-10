import {
  _decorator,
  BoxCollider,
  Component,
  Node,
  PhysicsSystem,
  RigidBody,
  Vec3,
} from "cc";
import { gameState } from "./state";
import { NodesName } from "./model";
const { ccclass, property } = _decorator;

@ccclass("RoadController")
export class RoadController extends Component {
  @property(Node) baseBridgeBlock: Node = null;

  protected onLoad(): void {
    this.node.children
      .filter((item) => item.name.includes(NodesName.BridgeBlock))
      .forEach((childNode, index) => {
        const baseCollider = this.baseBridgeBlock.getComponent(BoxCollider);

        let rigidBody = childNode.getComponent(RigidBody);
        let collider = childNode.getComponent(BoxCollider);

        if (!rigidBody) {
          rigidBody = childNode.addComponent(RigidBody);

          const factor = Math.ceil(index / 59);
          rigidBody.type = RigidBody.Type.STATIC;

          rigidBody.mass = gameState.bridgeBlockMass / (factor + 1);
          rigidBody.linearFactor = new Vec3(1, 1, 1);

          const gravityBoost = new Vec3(0, -index * 100, 0);
          rigidBody.applyForce(gravityBoost, new Vec3(0, 0, 0));
          rigidBody.angularDamping = 0.5;
        }

        if (!collider) {
          collider = childNode.addComponent(BoxCollider);
          collider.size = baseCollider.size;

          collider.on(
            "onCollisionEnter",
            (e) => {
              if (e.otherCollider.node.name === NodesName.Car) {
                rigidBody.type = RigidBody.Type.DYNAMIC;

                const { node } = e.otherCollider;
                const carRigitBody = node.getComponent(RigidBody);
                carRigitBody.linearDampingn = (4 * index) / 600 + 0.6;

                const speedFactor = gameState.carSpeed / gameState.maxSpeed;

                gameState.carSpeed =
                  (gameState.maxSpeed - index * 0.011) * speedFactor;
              }
            },
            this
          );
        }
      });
  }

  //   start() {}

  update(deltaTime: number) {}
}
