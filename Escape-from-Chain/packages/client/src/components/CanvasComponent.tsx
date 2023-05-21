import React, { useEffect, useRef } from "react";

import Player from "../classes/Player";

const CanvasComponent: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let animationId: number;
    function animate() {
      // Looping the frame.
      animationId = requestAnimationFrame(animate);
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
      }

      //   projectile.drawAndUpdate();
      //   // Remove bullets that out of screen.
      //   if (
      //     projectile.x + projectile.radius < 0 ||
      //     projectile.x - projectile.radius > canvas.width ||
      //     projectile.y + projectile.radius < 0 ||
      //     projectile.y - projectile.radius > canvas.height
      //   ) {
      //     setTimeout(() => {
      //       projectiles.splice(projectileIndex, 1);
      //     }, 0);
      //   }
      // });

      // enemies.forEach((enemy, enemyIndex) => {
      //   enemy.drawAndUpdate();
      //   // Collision detection. Enemy & Player.
      //   const dist = Math.hypot(player.x - enemy.x, player.y - enemy.y);
      //   if (dist - enemy.radius - player.radius <= 0) {
      //     cancelAnimationFrame(animationId);
      //   }

      //   projectiles.forEach((projectile, projectileIndex) => {
      //     const dist = Math.hypot(
      //       projectile.x - enemy.x,
      //       projectile.y - enemy.y
      //     );

      //     // Collision detection. Enemy & Projectile.
      //     if (dist - enemy.radius - projectile.radius <= 0) {
      //       if (enemy.radius - 10 >= 10) {
      //         // GSAP smooth animation effect.
      //         gsap.to(enemy, {
      //           radius: enemy.radius - 10,
      //         });
      //         setTimeout(() => {
      //           projectiles.splice(projectileIndex, 1);
      //         }, 0);
      //       } else {
      //         setTimeout(() => {
      //           enemies.splice(enemyIndex, 1);
      //           projectiles.splice(projectileIndex, 1);
      //         }, 0);
      //       }
      //     }
      //   });
      // });
    }

    const canvas = canvasRef.current;
    const canvas2dContext = canvas?.getContext("2d");

    // Start animation.
    animate();

    // Clear animation.
    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);

  return <canvas ref={canvasRef} width={1024} height={768} />;
};

export default CanvasComponent;
