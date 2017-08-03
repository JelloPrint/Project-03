import { SVG_NS } from '../settings';

export default class Ball {
  constructor(radius, boardWidth, boardHeight) {
    this.radius = radius;
    this.boardWidth = boardWidth;
    this.boardHeight = boardHeight;
    this.direction = 1;
  }

  render(svg) {

    let ball = document.createElementNS(SVG_NS, 'circle');
    ball.setAttributeNS(null, 'radius', this.radius);
    ball.setAttributeNS(null, '')
    svg.appendChild(ball);
  }
}