import {
  _decorator,
  Component,
  Node,
  Size,
  tween,
  UIOpacity,
  UITransform,
  Vec3,
} from "cc";
import { SizeInterface } from "./model";
const { ccclass, property } = _decorator;

@ccclass("LeverController")
export class LeverAnimation extends Component {
  @property(Node) hand: Node | null = null;
  @property(Node) lever: Node | null = null;
  @property(Node) platform: Node | null = null;

  private minY: number;
  private maxY: number;
  private isTouched: boolean = false;
  private leverSize: { x: Number; y: Number; width: Number; height: Number };
  private handSize: { x: Number; y: Number; width: Number; height: Number };
  private platformSize: { x: Number; y: Number; width: Number; height: Number };

  private animationDuration = 1;
  private animationDelay = 1.5;

  onLoad() {
    this.node.on(Node.EventType.TOUCH_START, this.onTouchStart, this);
    this.node.on(Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
    this.node.on(Node.EventType.TOUCH_END, this.onTouchEnd, this);
  }

  start() {
    const platformHeight = this.node.parent.getComponent(UITransform).height;
    const leverHeight = this.lever.getComponent(UITransform).height;

    const getSize = (node: Node): SizeInterface => {
      return {
        x: node.position.x,
        y: this.lever.position.y,
        width: this.lever.getComponent(UITransform).width,
        height: this.lever.getComponent(UITransform).height,
      };
    };

    this.leverSize = getSize(this.lever);
    this.platformSize = getSize(this.platform);
    this.handSize = getSize(this.hand);

    this.minY = -platformHeight / 2 + leverHeight / 2;
    this.maxY = platformHeight / 2 - leverHeight / 2;

    console.log(this.minY, this.maxY);

    this.startAnimation();
  }

  // update(deltaTime: number) {}

  startAnimation() {
    if (!this.hand || !this.lever) return;

    this.hand.active = !this.isTouched;

    this.loopAnimation();
  }

  loopAnimation() {
    if (this.isTouched) return;

    tween(this.lever)
      .to(this.animationDuration, {
        position: new Vec3(this.lever.position.x, this.maxY, 0),
      })
      .to(this.animationDuration, {
        position: new Vec3(this.lever.position.x, this.minY, 0),
      })
      .to(this.animationDuration, {
        position: new Vec3(this.lever.position.x, this.lever.position.y, 0),
      })
      .delay(this.animationDelay)

      .union()
      .start();

    tween(this.hand)
      .to(this.animationDuration, {
        position: new Vec3(this.hand.position.x, this.maxY, 0),
      })
      .to(this.animationDuration, {
        position: new Vec3(this.hand.position.x, this.minY, 0),
      })
      .to(this.animationDuration, {
        position: new Vec3(this.hand.position.x, this.lever.position.y, 0),
      })

      .union()
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
  }

  onTouchStart() {
    this.stopAnimation();

    this.isTouched = true;
  }

  onTouchMove(e) {
    if (!this.isTouched) return;

    let delta = e.getDelta();
    let newPos = this.node.position.clone();
    newPos.y += delta.y;

    newPos.y = Math.min(Math.max(newPos.y, this.minY), this.maxY);
    this.node.setPosition(newPos);
  }

  onTouchEnd(e) {
    console.log(e);
  }
}
