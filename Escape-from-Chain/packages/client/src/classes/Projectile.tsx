class Projectile {
  x: number;
  y: number;
  radius: number;
  color: string;
  velocity: { x: number; y: number };

  constructor(
    x: number,
    y: number,
    radius: number,
    color: string,
    velocity: { x: number; y: number }
  ) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    this.velocity = velocity;
  }

  draw(canvas2dContext: CanvasRenderingContext2D) {
    // Start point
    canvas2dContext.beginPath();
    // arc() for drawing arc or circle.
    canvas2dContext.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    canvas2dContext.fillStyle = this.color;
    canvas2dContext.fill();
  }

  drawAndUpdate(canvas2dContext: CanvasRenderingContext2D) {
    this.draw(canvas2dContext);
    this.x = this.x + this.velocity.x;
    this.y = this.y + this.velocity.y;
  }
}

export default Projectile;
