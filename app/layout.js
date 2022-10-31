'use client';
import Game from "../components/game.js";

export default function RootLayout({ children }) {
    return (
      <html lang="en">
        <head>
          <title>Nesxt.js</title>
          <script src="https://cdn.jsdelivr.net/npm/phaser@3.15.1/dist/phaser-arcade-physics.min.js"></script>
        </head>
        <body>{children} <Game /></body>
      </html>
    );
  }