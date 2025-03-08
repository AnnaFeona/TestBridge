import { _decorator, Component, Node, tween, Vec3 } from "cc";
const { ccclass, property } = _decorator;

@ccclass("LeverAnimation")
export class LeverAnimation extends Component {
  @property(Node) hand: Node | null = null; // Ссылка на руку
  @property(Node) lever: Node | null = null; // Ссылка на рычаг
  @property(Node) parent: Node | null = null; // Ссылка на рычаг


  private minY: number;
  private maxY: number = 50;
  private isTouched: boolean = false; // Остановить анимацию при касании
  start() {}

  onLoad() {
    this.startAnimation();
    console.log(this.node.parent);
  }

  update(deltaTime: number) {}

  startAnimation() {
    if (!this.hand || !this.lever) return;

    this.hand.active = true;

    this.loopAnimation();
  }

  loopAnimation() {
    if (this.isTouched) return;

    tween(this.hand)
      .to(1, {
        position: new Vec3(
          this.lever.position.x + 50,
          this.lever.position.y,
          0
        ),
      })
      .start();

    // Движение рычага вниз
    // tween(this.lever)
    //   .to(0.5, { position: new Vec3(this.lever.position.x, this.minY, 0) }) // Опускаем рычаг
    //   .delay(0.3) // Небольшая пауза
    //   .to(0.5, { position: new Vec3(this.lever.position.x, this.maxY, 0) }) // Поднимаем рычаг
    //   .delay(0.3)
    //   .call(() => {
    //     // Исчезновение руки
    //     this.hand.active = false;
    //   })
    // //   .delay(2) // Задержка перед следующим циклом
    //   .call(() => {
    //     this.startAnimation(); // Повтор анимации
    //   })
    //   .start();
  }

  stopAnimation() {
    this.isTouched = true;
    if (this.hand) this.hand.active = false; // Скрываем руку
  }
}
