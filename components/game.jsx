"use client";

import React, { useEffect } from "react";
import PhaserGame from "../game/main";

const canvasContentId = "game-content";

export default function Game() {
  useEffect(() => {
    const phaserGame = new PhaserGame({ canvasContentId });

    return () => phaserGame.destroy();
  }, []);

  return <div id={canvasContentId} key="game-content" />;
}
