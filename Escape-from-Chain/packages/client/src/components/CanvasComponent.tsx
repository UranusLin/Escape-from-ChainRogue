import React, { useEffect, useRef } from "react";

import Player from "../classes/player";

const CanvasComponent: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const canvas2dContext = canvas.getContext("2d");

      if (canvas2dContext) {
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
    }
  }, []);

  return <canvas ref={canvasRef} width={1024} height={768} />;
};

export default CanvasComponent;
