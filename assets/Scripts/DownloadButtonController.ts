/* eslint-disable no-undef */
import { _decorator, Component, Node, sys } from "cc";
import { APP_STORE_URL, PLAY_STORE_URL, WEB_URL } from "./state";
const { ccclass, property } = _decorator;

@ccclass("DownloadButtonController")
export class DownloadButtonController extends Component {
  @property(Node) button: Node = null;
  @property(Node) settings: Node = null;

  start() {
    this.button.on(Node.EventType.TOUCH_END, this.openStore, this);
  }

  openStore() {
    if (sys.os === sys.OS.IOS) {
      window.open(APP_STORE_URL, "_blank");
    } else if (sys.os === sys.OS.ANDROID) {
      window.open(PLAY_STORE_URL, "_blank");
    } else {
      window.open(WEB_URL, "_blank");
    }
  }
}
