"use client";

import React, { useEffect } from "react";

const canvasContentId = "game-content";

export default function Game() {
  useEffect(() => {
    const load = async () => {
      const { default: initGame } = await import("../game/main");
      initGame(canvasContentId);
    };
    load();
  }, []);

  return <div id={canvasContentId} key="game-content" />;
}
