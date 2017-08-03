import { SVG_NS } from '../settings';

export default class Paddle {
  constructor(boardHeight, width, height, x, y) {
    this.boardHeight = boardHeight;
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.speed = 10;
    this.score = 0;
  }

  up() {

  }

  down() {

  }

  render(svg) {

    let paddle = document.createAttributeNS(SVG_NS, 'paddle');
    paddle.setAttributeNS(null, 'width', this.width);
    paddle.setAttributeNS(null, 'height', this.height);

  }
}