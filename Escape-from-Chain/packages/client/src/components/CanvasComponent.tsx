import React, { useEffect, useRef, useState } from "react";

import Player from "../classes/Player";
import Projectile from "../classes/Projectile";

const CanvasComponent: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  // Projectile
  const [projectiles, setProjectiles] = useState<Projectile[]>([]);

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
      }
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

    // Start animation.
    animate();

    // Clear animation when dismount.
    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [projectiles]);

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

  return <canvas ref={canvasRef} width={1024} height={768} />;
};

export default CanvasComponent;
