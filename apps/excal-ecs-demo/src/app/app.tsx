import React, { useEffect, useRef } from 'react';
import { Engine, Actor, Color, Vector, Scene } from 'excalibur';

// Ant Actor Factory
const createAnt = (game) => {
  const x = Math.random() * game.drawWidth;
  const y = Math.random() * game.drawHeight;
  const ant = new Actor({
    x: x,
    y: y,
    width: 20,
    height: 20,
    color: Color.Red
  });
  ant.dx = Math.random() * 200 - 100; // Random velocity in x
  ant.dy = Math.random() * 200 - 100; // Random velocity in y
  return ant;
};

// React Component
const App = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!canvasRef.current) {
      console.log("Canvas not initialized");
      return;
    }

    // Initialize the Excalibur Engine
    const game = new Engine({
      canvasElement: canvasRef.current,
      width: 800,
      height: 600,
      backgroundColor: Color.Azure
    });

    // Create a new scene for the game
    const scene = new Scene(game);
    game.addScene('main', scene);
    game.goToScene('main');

    // Add ants to the scene
    for (let i = 0; i < 10; i++) {
      const ant = createAnt(game);
      scene.add(ant);
    }

    // Update loop to move ants
    game.on('preupdate', ev => {
      scene.actors.forEach(ant => {
        ant.pos.x += ant.dx * ev.delta / 1000;
        ant.pos.y += ant.dy * ev.delta / 1000;

        // Reverse direction upon hitting boundaries
        if (ant.pos.x < 0 || ant.pos.x > game.drawWidth) ant.dx *= -1;
        if (ant.pos.y < 0 || ant.pos.y > game.drawHeight) ant.dy *= -1;
      });
    });

    // Start the game
    game.start().then(() => {
      console.log('Game started successfully');
    }).catch(err => {
      console.error('Failed to start the game', err);
    });

    // Cleanup function
    return () => {
      game.stop();
    };
  }, []);

  return (
    <canvas ref={canvasRef} width="800" height="600" style={{ border: '1px solid black' }}></canvas>
  );
};

export default App;
