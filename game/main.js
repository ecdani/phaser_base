import { Game, CANVAS } from "phaser";
import ExampleScene from "./scenes/ExampleScene";

let phaserInstance;

export default function initGame(canvasContentId) {
  if (phaserInstance) {
    return phaserInstance;
  }
  phaserInstance = new Game({
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
  return phaserInstance;
}
