var cursorX, cursorY, cursorIn;

export function isCloseTo(x, y, edge) {}

export function getScreenSize() {
  return { width: window.innerWidth - 64, height: window.innerHeight - 64 };
}

export function getRandomCoords() {
  const { height: maxHeight, width: maxWidth } = getScreenSize();

  const randomY = Math.floor(Math.random() * (maxHeight - 64 + 1)) + 64;
  const randomX = Math.floor(Math.random() * (maxWidth - 64 + 1)) + 64;

  return { x: randomX, y: randomY };
}

export function getDirection(x, y) {
  if (cursorX && cursorY && cursorIn) return { x: cursorX, y: cursorY };

  return getRandomCoords();
  // return { x: x + 10, y: y + 10 };
}

function updateCursorCoords(e) {
  cursorIn = true;
  cursorX = e.clientX;
  cursorY = e.clientY;
}

export function generateId(type) {
  function randomInt() {
    return Math.floor(Math.random() * 999);
  }

  return `${type}_${randomInt()}${randomInt()}${randomInt()}`;
}

export function createDiv(x, y, id, type) {
  const div = document.createElement("div");

  div.setAttribute("id", id);
  div.classList.add("element", type);

  div.style.left = x + "px";
  div.style.top = y + "px";

  document.body.appendChild(div);
}

export function updateLocation(x, y, id) {
  const div = document.getElementById(id);

  div.style.left = x + "px";
  div.style.top = y + "px";
}

export function init() {
  const body = document.body;

  document.documentElement.addEventListener(
    "mouseleave",
    () => (cursorIn = false)
  );

  body.addEventListener("mousemove", updateCursorCoords);
}
