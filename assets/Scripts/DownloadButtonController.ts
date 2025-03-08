import { _decorator, Component, Node, sys } from "cc";
const { ccclass, property } = _decorator;

@ccclass("DownloadButtonController")
export class DownloadButtonController extends Component {
  @property(Node) button: Node = null;

  private appStoreUrl: string = "https://apps.apple.com/app/";
  private playStoreUrl: string = "https://play.google.com/store/apps/";
  private webUrl: string = "https://google.com";

  start() {
    this.button.on(Node.EventType.TOUCH_END, this.openStore, this);
  }

  openStore() {
    if (sys.os === sys.OS.IOS) {
      window.open(this.appStoreUrl, "_blank");
    } else if (sys.os === sys.OS.ANDROID) {
      window.open(this.playStoreUrl, "_blank");
    } else {
      window.open(this.webUrl, "_blank");
    }
  }
}
