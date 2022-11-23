"use client";

import Phaser from "phaser";
import React, { useEffect, useReducer } from "react";
import ExampleScene from "./exampleScene";

function gameReducer(state, action) {
  switch (action.type) {
    case "set":
      return action.payload;
    case "destroy":
      state.destroy(true);
      break;
    default:
      throw new Error();
  }
  return null;
}

export default function Game() {
  const [, /* gameState, */ dispatch] = useReducer(gameReducer);

  useEffect(() => {
    const phaserGame = new Phaser.Game({
      type: Phaser.CANVAS,
      parent: "game-content",
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
    dispatch({ type: "set", payload: phaserGame });
    return () => {
      dispatch({ type: "destroy" });
    };
  }, []);

  return <div id="game-content" key="game-content" />;
}
