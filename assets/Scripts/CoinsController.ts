import {
  _decorator,
  BoxCollider,
  Component,
  find,
  instantiate,
  ITriggerEvent,
  Label,
  Node,
  Prefab,
  tween,
  UITransform,
  v3,
  Vec3,
} from "cc";
import { NodesName } from "./model";
import { gameState } from "./state";
const { ccclass, property } = _decorator;

@ccclass("CoinsController")
export class CoinsController extends Component {
  @property(Prefab) coinPrefab: Prefab = null;
  @property(Node) coinUI: Node = null;
  @property(Node) scoreLabel: Node = null;
  @property(Number) coinAmount = 10;
  @property(Node) baseCoin: Node = null;

  private baseCollider: BoxCollider = null;

  onLoad() {
    const { x, y, z } = this.baseCoin.position;
    this.baseCollider = this.baseCoin.getComponent(BoxCollider);

    for (let i = 1; i < this.coinAmount; i++) {
      const pos = new Vec3(x + 15 * i, y, z);
      this.renderCoin(pos, i);
    }
  }
  start() {
    const { children } = this.node;

    children
      .map((node) => node.getComponent(BoxCollider))
      .forEach((coinTrigger) => {
        coinTrigger.on("onTriggerEnter", this.onCoinCollected, this);
      });
  }

  renderCoin(position, index) {
    let coinNode = instantiate(this.coinPrefab);
    this.node.addChild(coinNode);

    coinNode.scale = this.baseCoin.scale;
    coinNode.name = `${this.baseCoin.name}_${index}`;

    coinNode.setPosition(position);

    let collider = coinNode.addComponent(BoxCollider);
    collider.isTrigger = true;
    collider.size = this.baseCollider.size;
  }

  onCoinCollected(e: ITriggerEvent) {
    const { name } = e.otherCollider.node;
    const coinNode = e.selfCollider.node;

    if (name === NodesName.Car) {
      this.animateCoinToUI(coinNode);
      this.incrementScore();
    }
  }

  animateCoinToUI(coinNode: Node) {
    const uiTransform = this.coinUI.getComponent(UITransform);
    const worldUIPos = uiTransform.convertToWorldSpaceAR(new Vec3(0, 0, 0));

    const canvas = find("Canvas");

    const scenePos = canvas
      .getComponent(UITransform)
      .convertToNodeSpaceAR(worldUIPos);

    tween(coinNode)
      .to(3, { position: v3(scenePos.x, scenePos.y, scenePos.z) })
      .call(() => {
        coinNode.destroy();
      })
      .start();
  }

  incrementScore() {
    gameState.scoreCouter++;
    this.scoreLabel.getComponent(Label).string =
      gameState.scoreCouter.toString();
  }
}
