import {
  _decorator,
  Component,
  Input,
  input,
  Node,
  tween,
  UIOpacity,
  v3,
} from "cc";
import { gameState } from "./state";
import { DownloadButtonController } from "./DownloadButtonController";
const { ccclass, property } = _decorator;

@ccclass("GameOver")
export class GameOver extends Component {
  @property(Node) crossUI: Node = null; // Крест, который появляется
  @property(Node) background: Node = null; // Фон, который затемняется
  @property(Node) downloadButton: Node = null; // Кнопка Download
  @property(Node) retryButton: Node = null; // Кнопка Retry

  private isGameOver: Boolean = false;
  start() {}

  update() {
    if (this.isGameOver) return;
    const { isFinished } = gameState;

    if (isFinished) {
      this.isGameOver = true;

      this.gameOver();
    }
  }

  public gameOver() {
    const dowloadScript = this.downloadButton.getComponent(
      "DownloadButtonController",
    ) as DownloadButtonController;
    input.on(Input.EventType.TOUCH_START, dowloadScript.openStore);

    this.scheduleOnce(this.showCross, 0.5);
    this.scheduleOnce(this.fadeInBackground, 1);
    this.scheduleOnce(this.fadeOutDownloadButton, 1);
    this.scheduleOnce(this.showRetryButton, 1);
  }

  private showCross() {
    this.crossUI.active = true;
  }

  private fadeInBackground() {
    this.background.active = true;
    this.changeOpacity(this.background, 0, 220);
  }

  private fadeOutDownloadButton() {
    this.changeOpacity(this.downloadButton, 255, 0, 2);
  }

  private showRetryButton() {
    this.retryButton.active = true;

    tween(this.retryButton)
      .to(0.5, { scale: v3(1.1, 1.1, 1) })
      .to(0.5, { scale: v3(1, 1, 1) })
      .union()
      .repeatForever()
      .start();
  }

  private changeOpacity(node: Node, from: number, to: number, duration = 1) {
    let opacity = node.getComponent(UIOpacity);

    if (!opacity) {
      opacity = node.addComponent(UIOpacity);
    }

    opacity.opacity = from;
    tween(opacity).to(duration, { opacity: to }).start();
  }
}
