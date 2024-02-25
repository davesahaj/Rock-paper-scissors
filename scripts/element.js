import {
  createDiv,
  generateId,
  getDirection,
  getRandomCoords,
  updateLocation,
} from "./utils.js";

export class Element {
  id;
  #isAlive;
  x;
  y;

  constructor(type) {
    const { x, y } = getRandomCoords();

    this.type = type;
    this.#isAlive = true;

    this.x = x;
    this.y = y;

    this.id = generateId(type);

    createDiv(this.x, this.y, this.id, type);
    this.#move();
  }

  #move() {
    if (!this.#isAlive) return;

    setInterval(() => {
      const { x, y } = getDirection(this.x, this.y);
      this.x = x;
      this.y = y;
      updateLocation(this.x, this.y, this.id);
    }, 900+ Math.random()*100);
  }

  destroy() {
    this.#isAlive = false;
  }
}

// an element can
// - move in a random direction every 100ms
// - can collide with other elements
// - can hunt or get hunted.
