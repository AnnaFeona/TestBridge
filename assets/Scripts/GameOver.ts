import { _decorator, Button, Component, Label, Node } from "cc";
const { ccclass, property } = _decorator;

@ccclass("GameOver")
export class GameOver extends Component {
  @property(Node) gameOverUI: Node = null; // UI для завершения игры
  @property(Node) crossUI: Node = null; // Крест, который появляется
  @property(Node) background: Node = null; // Фон, который затемняется
  @property(Button) downloadButton: Button = null; // Кнопка Download
  @property(Button) retryButton: Button = null; // Кнопка Retry
  start() {}

  update(deltaTime: number) {}

  public gameOver() {}
}
