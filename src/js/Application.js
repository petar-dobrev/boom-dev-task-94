import EventEmitter from "eventemitter3";

export default class Application extends EventEmitter {
  static get events() {
    return {
      READY: "ready",
    };
  }

  constructor() {
    super();
    this.emojis = [];
    this.banana = "🍌";
    this.emojisContainer = document.querySelector("#emojis");

    this.emit(Application.events.READY);
  }
  setEmojis(emojis) {
    this.emojis = emojis;
    const p = document.createElement("p");
    p.innerText = this.emojis;
    this.emojisContainer.innerHTML = "";
    this.emojisContainer.appendChild(p);
  }

  addBananas() {
    const monkeys = this.emojis;
    this.emojis = monkeys.map((monkey) => monkey + this.banana);
    this.setEmojis(this.emojis);
  }
}
