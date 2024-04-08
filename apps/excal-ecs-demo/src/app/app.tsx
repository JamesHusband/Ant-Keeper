import { useEffect, useRef } from 'react';
import { Engine, Loader, Color, Actor, Vector } from 'excalibur';

// Define the game initialization function
const initGame = (canvasElement: HTMLCanvasElement) => {
  const game = new Engine({
    canvasElement: canvasElement,
    width: 800,
    height: 600,
    backgroundColor: Color.Azure
  });

  // Create a player actor with initial velocity
  let player = new Actor({
    pos: new Vector(200, 200),
    width: 40,
    height: 40,
    color: Color.Red,
    vel: new Vector(100, 0)  // Velocity in pixels per second to the right
  });
  game.add(player);

  // Update event to handle movement and boundary checks
  game.on('preupdate', (ev) => {
    // Check if player hits the horizontal boundaries
    if (player.pos.x > game.drawWidth - player.width || player.pos.x < 0) {
      player.vel.x *= -1;  // Reverse direction on hitting a boundary
    }
    player.pos.x += player.vel.x * ev.delta / 1000;  // Update position based on velocity and time delta
  });

  return game;
};


export function App() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (canvasRef.current) {
      const game = initGame(canvasRef.current);
      game.start(new Loader()).then(() => console.log('Game started!'));

      return () => game.stop();
    }
  }, []);

  return (
    <canvas ref={canvasRef} width="800" height="600" style={{ border: '1px solid black' }}></canvas>
  );
}

export default App;
