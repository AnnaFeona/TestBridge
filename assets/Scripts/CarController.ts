import {
  _decorator,
  Animation,
  BoxCollider,
  Camera,
  Collider,
  Component,
  ICollisionEvent,
  RigidBody,
  Vec3,
  Node,
} from "cc";
import { gameState } from "./state";
import { AnimationName, NodesName } from "./model";
import { GameOver } from "./GameOver";
const { ccclass, property } = _decorator;

@ccclass("CarController")
export class CarController extends Component {
  @property(RigidBody) rigidBody: RigidBody = null;
  @property(BoxCollider) carCollider: BoxCollider = null;
  @property(Camera) mainCamera: Camera = null;
  @property(Node) carBody: Node;
  @property(Node) gameOverNode: Node;

  private force: Vec3 = new Vec3(0, 0, 0);

  private parentNode: Node | null = null;
  private animation: Animation = null;

  private isGameOver = false;
  start() {
    if (!this.rigidBody) {
      this.rigidBody = this.node.getComponent(RigidBody);
    }

    this.rigidBody.mass = gameState.carMass;
    this.rigidBody.useCCD = true;

    const material = this.node.getComponent(Collider).sharedMaterial;
    material.friction = 1;
    material.restitution = 0.1;

    if (!this.animation) {
      this.animation = this.node.getComponent(Animation);
    }

    if (!this.carCollider) {
      this.carCollider = this.node.getComponent(BoxCollider);
    }

    this.carCollider.on("onCollisionEnter", this.onCollision, this);
    this.carCollider.on("onTriggerEnter", this.onCollision, this);
  }

  update(deltaTime: number) {
    const { isLeverActive, isFinished } = gameState;

    if (isLeverActive && !isFinished) {
      this.moveCar(deltaTime);
    }
  }

  moveCar() {
    const { carSpeed } = gameState;
    this.force = new Vec3(carSpeed, 0, 0);

    if (!gameState.isFinished) {
      this.rigidBody.applyImpulse(this.force);
    }
  }

  onCollision(e: ICollisionEvent) {
    const { name } = e.otherCollider.node;

    if (name === NodesName.FinishPlatform || name === NodesName.BridgeDeep) {
      if (this.isGameOver) return;

      this.isGameOver = true;
      gameState.carSpeed = 0;
      gameState.isFinished = false;
      this.enadlePhisics();
      this.animation.play(AnimationName.CarDestroy);
      this.completeRace();
    }
  }

  enadlePhisics() {
    this.carBody.children.forEach((part) => {
      part.addComponent(RigidBody);
      part.getComponent(BoxCollider).isTrigger = false;
    });

    this.rigidBody.useGravity = false;

    this.rigidBody.mass = 1000;
  }

  completeRace() {
    const gameOverScript = this.gameOverNode.getComponent(
      "GameOver",
    ) as GameOver;

    gameOverScript.gameOver();
  }
}
