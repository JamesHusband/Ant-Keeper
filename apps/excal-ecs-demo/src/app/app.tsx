import React, { useEffect, useRef } from 'react';
import { Engine, Actor, Color, Scene, Vector, CollisionType } from 'excalibur';

const TerrainType = {
  Grass: 'Grass',
  Water: 'Water',
  Rock: 'Rock'
};

const TerrainColors = {
  [TerrainType.Grass]: Color.Green,
  [TerrainType.Water]: Color.Blue,
  [TerrainType.Rock]: Color.Gray
};

const createTerrain = (x, y, type) => {
  let actorOptions = {
    x: x + 50,
    y: y + 50,
    width: 100,
    height: 100,
    color: TerrainColors[type] || Color.Black,
    collisionType: type === TerrainType.Rock ? CollisionType.Fixed : CollisionType.Passive
  };
  return new Actor(actorOptions);
};

const createAnt = (drawWidth, drawHeight) => {
  const x = Math.random() * drawWidth;
  const y = Math.random() * drawHeight;
  const ant = new Actor({
    x: x,
    y: y,
    width: 20,
    height: 20,
    color: Color.Red,
    vel: Vector.fromAngle(Math.random() * 2 * Math.PI).scale(100)
  });
  return ant;
};

const populateTerrain = (scene, drawWidth, drawHeight) => {
  for (let i = 0; i < drawWidth; i += 100) {
    for (let j = 0; j < drawHeight; j += 100) {
      const type = Object.values(TerrainType)[Math.floor(Math.random() * Object.values(TerrainType).length)];
      const terrain = createTerrain(i, j, type);
      scene.add(terrain);
    }
  }
};

const handleAntMovement = (ant, terrainObjects, delta, game) => {
  ant.pos = ant.pos.add(ant.vel.scale(delta / 1000));
  terrainObjects.forEach(terrain => {
    if (terrain.color === Color.Blue && ant.collides(terrain)) {
      ant.vel = ant.vel.scale(0.5);  // Slow down in water
    }
  });

  // Ensure ants bounce back at the edges
  if (ant.pos.x < 0 || ant.pos.x > game.drawWidth) {
    ant.vel.x *= -1;  // Reverse horizontal velocity
    ant.pos.x = Math.max(0, Math.min(ant.pos.x, game.drawWidth));  // Clamp position within bounds
  }
  if (ant.pos.y < 0 || ant.pos.y > game.drawHeight) {
    ant.vel.y *= -1;  // Reverse vertical velocity
    ant.pos.y = Math.max(0, Math.min(ant.pos.y, game.drawHeight));  // Clamp position within bounds
  }
};

const App = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!canvasRef.current) {
      console.log("Canvas not initialized");
      return;
    }

    const game = new Engine({
      canvasElement: canvasRef.current,
      width: 800,
      height: 600,
      backgroundColor: Color.Azure
    });

    const scene = new Scene(game);
    game.addScene('main', scene);
    game.goToScene('main');

    populateTerrain(scene, game.drawWidth, game.drawHeight);
    const ants = Array.from({ length: 10 }, () => createAnt(game.drawWidth, game.drawHeight));
    ants.forEach(ant => scene.add(ant));

    game.on('preupdate', ev => {
      scene.actors.forEach(actor => {
        handleAntMovement(actor, scene.actors, ev.delta, game);
      });
    });

    game.start().then(() => {
      console.log('Game started successfully');
    }).catch(err => {
      console.error('Failed to start the game', err);
    });

    return () => game.stop();
  }, []);

  return <canvas ref={canvasRef} width="800" height="600" style={{ border: '1px solid black' }}></canvas>;
};

export default App;