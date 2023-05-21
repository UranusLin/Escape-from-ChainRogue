import React, { useEffect, useRef, useState } from "react";

import Player from "../classes/Player";
import Enemy from "../classes/Enemy";
import Projectile from "../classes/Projectile";

const CanvasComponent: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  // Projectiles
  const [projectiles, setProjectiles] = useState<Projectile[]>([]);
  // Enemies
  const [enemies, setEnemies] = useState<Enemy[]>([]);

  useEffect(() => {
    let animationId: number;
    function animate() {
      // Looping the frame.
      animationId = requestAnimationFrame(animate);
      const canvas = canvasRef.current;
      const canvas2dContext = canvas?.getContext("2d");
      if (canvas2dContext && canvas) {
        canvas2dContext.fillStyle = "rgba(0, 0, 0, 0.1)";
        canvas2dContext.fillRect(0, 0, canvas.width, canvas.height);

        const player = new Player(
          canvas.width / 2,
          canvas.height / 2,
          10,
          "yellow"
        );
        player.draw(canvas2dContext);
        console.log(projectiles);

        projectiles.forEach((projectile, projectileIndex) => {
          projectile.drawAndUpdate(canvas2dContext);
          // Remove bullets that out of screen.
          if (
            projectile.x + projectile.radius < 0 ||
            projectile.x - projectile.radius > canvas.width ||
            projectile.y + projectile.radius < 0 ||
            projectile.y - projectile.radius > canvas.height
          ) {
            setProjectiles((prevProjectiles) =>
              prevProjectiles.filter((_, i) => i !== projectileIndex)
            );
          }
        });

        enemies.forEach((enemy, enemyIndex) => {
          enemy.drawAndUpdate(canvas2dContext);
          // Collision detection. Enemy & Player.
          const dist = Math.hypot(player.x - enemy.x, player.y - enemy.y);
          if (dist - enemy.radius - player.radius <= 0) {
            cancelAnimationFrame(animationId);
          }

          projectiles.forEach((projectile, projectileIndex) => {
            const dist = Math.hypot(
              projectile.x - enemy.x,
              projectile.y - enemy.y
            );

            // Collision detection. Enemy & Projectile.
            if (dist - enemy.radius - projectile.radius <= 0) {
              setEnemies((prevEnemies) =>
                prevEnemies.filter((_, i) => i !== enemyIndex)
              );
              setProjectiles((prevProjectiles) =>
                prevProjectiles.filter((_, i) => i !== projectileIndex)
              );
            }
          });
        });
      }
    }

    // Start animation.
    animate();

    // Clear animation when dismount.
    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [projectiles, enemies]);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      console.log("Shoot !!");
      const canvas = canvasRef.current;
      if (canvas) {
        const angle = Math.atan2(
          event.clientY - canvas.height / 2,
          event.clientX - canvas.width / 2
        );
        const velocity = {
          x: Math.cos(angle) * 3,
          y: Math.sin(angle) * 3,
        };

        setProjectiles((prevProjectiles) => [
          ...prevProjectiles,
          new Projectile(
            canvas.width / 2,
            canvas.height / 2,
            5,
            "#c3c3c3",
            velocity
          ),
        ]);
      }
    };
    document.addEventListener("click", handleClick);

    // Remove when dismount.
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const canvas = canvasRef.current;
      if (canvas) {
        // Make sure the radius is 4 ~ 30.
        const radius = Math.random() * (30 - 4) + 4;
        // Enemies need to spawn outside of screen.
        let x: number;
        let y: number;
        if (Math.random() < 0.5) {
          x = Math.random() < 0.5 ? 0 - radius : canvas.width + radius;
          y = Math.random() * canvas.height;
        } else {
          x = Math.random() * canvas.width;
          y = Math.random() < 0.5 ? 0 - radius : canvas.height + radius;
        }
        // TODO: Import from enemy assets.
        const color = `red`;
        const angle = Math.atan2(canvas.height / 2 - y, canvas.width / 2 - x);
        const velocity = {
          x: Math.cos(angle),
          y: Math.sin(angle),
        };

        setEnemies((prevEnemies) => [
          ...prevEnemies,
          new Enemy(x, y, radius, color, velocity),
        ]);
      }
    }, 1000);

    // Remove when dismount.
    return () => {
      clearInterval(interval);
    };
  }, []);

  return <canvas ref={canvasRef} width={1024} height={768} />;
};

export default CanvasComponent;