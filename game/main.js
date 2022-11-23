import { Game, CANVAS } from "phaser";
import ExampleScene from "./scenes/ExampleScene";

export default class Main {
  constructor({ canvasContentId }) {
    this.game = new Game({
      type: CANVAS,
      parent: canvasContentId,
      width: 800,
      height: 600,
      scene: [ExampleScene],
      physics: {
        default: "arcade",
        arcade: {
          gravity: { y: 200 },
        },
      },
    });
  }

  destroy() {
    this.game.destroy(true);
  }
}
