import {
  _decorator,
  BoxCollider,
  Collider,
  Component,
  Node,
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
    this.node.children.forEach((childNode) => {
      const baseCollider = this.baseBridgeBlock.getComponent(BoxCollider);

      if (childNode.name.includes(NodesName.BridgeBlock)) {
        const childNodeId = +childNode.name.split(".")[1];

        if (!childNode.getComponent(RigidBody)) {
          const rigidBody = childNode.addComponent(RigidBody);
          rigidBody.type = RigidBody.Type.STATIC;
          rigidBody.mass = 15;
          rigidBody.linearDamping = 0;
          childNodeId < 31
            ? gameState.bridgeBlockMass
            : gameState.bridgeBlockMass * 100;
        }

        if (!childNode.getComponent(BoxCollider)) {
          const collider = childNode.addComponent(BoxCollider);
          collider.size = baseCollider.size;

          collider.on(
            "onCollisionEnter",
            (e) => {
              if (e.otherCollider.node.name === NodesName.Car) {
                const rigidBody = childNode.getComponent(RigidBody);

                rigidBody.type = RigidBody.Type.DYNAMIC;
                const gravityBoost = new Vec3(0, -childNodeId * 3, 0);
                rigidBody.applyLocalImpulse(gravityBoost);
                if (childNodeId > 30) {
                  rigidBody.applyForce(gravityBoost);
                }
              }
            },
            this
          );
        }
      }
    });
  }

  start() {}

  update(deltaTime: number) {}
}
