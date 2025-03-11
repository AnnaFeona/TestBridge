import {
  _decorator,
  Component,
  Node,
  Tween,
  tween,
  UITransform,
  Vec3,
} from "cc";
import { gameState } from "./state";
const { ccclass, property } = _decorator;

@ccclass("LeverController")
export class LeverController extends Component {
  @property(Node) hand: Node | null = null;
  @property(Node) lever: Node | null = null;
  @property(Node) platform: Node | null = null;

  private minY: number;
  private maxY: number;
  private isTouched: boolean = false;

  private animationDuration = 1;
  private animationDelay = 1.5;

  private leverTween: Tween<Node> = null;
  private handTween: Tween<Node> = null;

  onLoad() {
    this.node.on(Node.EventType.TOUCH_START, this.onTouchStart, this);
    this.node.on(Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
    this.node.on(Node.EventType.TOUCH_END, this.onTouchEnd, this);
  }

  start() {
    const platformHeight = this.node.parent.getComponent(UITransform).height;
    const leverHeight = this.lever.getComponent(UITransform).height;

    this.minY = -platformHeight / 2 + leverHeight / 2;
    this.maxY = platformHeight / 2 - leverHeight / 2;

    this.startAnimation();
  }

  startAnimation() {
    if (!this.hand || !this.lever) return;

    this.hand.active = !this.isTouched;

    this.loopAnimation();
  }

  loopAnimation() {
    if (this.isTouched) return;

    const moveNode = (node: Node, target: Node = node) => {
      return tween(node)
        .to(this.animationDuration, {
          position: new Vec3(node.position.x, this.maxY, 0),
        })
        .to(this.animationDuration, {
          position: new Vec3(node.position.x, this.minY, 0),
        })
        .to(this.animationDuration, {
          position: new Vec3(node.position.x, target.position.y, 0),
        });
    };

    this.leverTween = moveNode(this.lever).delay(this.animationDelay).start();
    moveNode(this.hand)
      .call(() => {
        this.hand.active = false;
      })
      .delay(this.animationDelay)
      .call(() => {
        this.startAnimation();
      })
      .start();
  }

  stopAnimation() {
    this.isTouched = true;
    if (this.hand) this.hand.active = false;
    if (this.leverTween) {
      this.leverTween.stop();
      this.leverTween = null;
    }
  }

  onTouchStart() {
    this.stopAnimation();

    this.isTouched = true;
    gameState.isLeverActive = true;
  }

  onTouchMove(e) {
    if (!this.isTouched) return;

    let delta = e.getDelta();
    let newPos = this.node.position.clone();
    newPos.y += delta.y;

    newPos.y = Math.min(Math.max(newPos.y, this.minY), this.maxY);
    this.node.setPosition(newPos);

    this.updateSpeed();
  }

  onTouchEnd() {}

  updateSpeed() {
    const { minSpeed, maxSpeed } = gameState;
    const { minY, maxY } = this;
    const { y } = this.lever.position;
    const normalisedY = (y - minY) / (maxY - minY);

    gameState.carSpeed = minSpeed + (maxSpeed - minSpeed) * normalisedY;
  }
}
