const button = document.querySelector("#btn");
const container = document.getElementById("container");
const header = document.querySelector("header");
const title = document.querySelector("h1");
const black = document.getElementById("black");
const red = document.getElementById("red");
const purple = document.getElementById("purple");
const white = document.getElementById("white");
const bodyElement = document.body;

button.addEventListener("click", createNote);
function randomColor() {
  const colorCharacters = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
  ];

  let color = "#";

  for (let i = 0; i < 6; i++) {
    const randomCharacter = Math.floor(Math.random() * colorCharacters.length);
    color += colorCharacters[randomCharacter];
  }
  return color;
}

let activeNote = null;
let offset = { x: 0, y: 0 };

function createNote() {
  const note = document.createElement("textarea");
  note.classList.add("note");
  const randomBackgroundColor = randomColor();
  note.style.backgroundColor = randomBackgroundColor;

  note.setAttribute("placeholder", "Escribe aqui tu nota");

  // eliminar con doble click
  note.addEventListener("dblclick", () => {
    container.removeChild(note);
  });

  container.appendChild(note);

  //agregar funcion de arrastre

  note.addEventListener("mousedown", (event) => {
    activeNote = note;
    offset.x = note.offsetLeft - event.clientX;
    offset.y = note.offsetTop - event.clientY;
    note.classList.add("hand-cursor");
  });

  function onMouseMove(event) {
    if (activeNote) {
      activeNote.style.left = event.clientX + offset.x + "px";
      activeNote.style.top = event.clientY + offset.y + "px";
    }
  }

  container.addEventListener("click", stopNoteMovement);
  document.addEventListener("click", stopNoteMovement);

  function stopNoteMovement() {
    if (activeNote) {
      activeNote.classList.remove("hand-cursor");
      activeNote = null;
    }
  }

  container.addEventListener("mousemove", onMouseMove);
}

// Botones para cambiar paleta de colores

let colorWhite = false;
let colorBlack = false;
let colorRed = false;
let colorPurple = false;

function paletaDeColores() {
  if (colorBlack) {
    header.style.backgroundColor = "black";
    button.style.backgroundColor = "black";
    button.style.color = "whitesmoke";
    button.style.border = "1px solid rgb(155, 170, 255)";
    title.style.color = "black";
    title.style.textShadow = "1px 1px 7px whitesmoke";
    document.body.style.fontFamily = "'Grenze Gotisch', cursive";
    bodyElement.style.backgroundColor = "rgba(0, 0, 0, 0.911)";
  } else if (colorRed) {
    header.style.backgroundColor = "rgba(75, 0, 0, 0.800)";
    button.style.backgroundColor = "rgb(39, 0, 0)";
    button.style.color = "whitesmoke";
    button.style.border = "1px solid rgb(107, 0, 0)";
    title.style.color = "whitesmoke";
    title.style.textShadow = "2px 3px 1px black";
    document.body.style.fontFamily = "cursive";
    bodyElement.style.backgroundColor = "rgba(243, 132, 132, 0.40)";
  } else if (colorPurple) {
    header.style.backgroundColor = "rgb(37, 0, 29)";
    button.style.backgroundColor = "rgba(109, 45, 95, 0.826)";
    button.style.color = "rgb(27, 0, 21)";
    button.style.border = "1px solid rgb(27, 0, 21)";
    title.style.color = "whitesmoke";
    title.style.textShadow = "2px 3px 1px black";
    (document.body.style.fontFamily = "Franklin Gothic Medium"),
      "Arial Narrow",
      "Arial",
      "sans-serif";
    bodyElement.style.backgroundColor = "rgba(109, 45, 95, 0.726)";
  } else if (colorWhite) {
    header.style.backgroundColor = "rgb(156, 156, 156)";
    button.style.backgroundColor = "papayawhip";
    button.style.color = "rgb(54, 0, 0)";
    button.style.border = "3px solid";
    title.style.color = "whitesmoke";
    title.style.textShadow = "2px 2px 2px rgb(107, 0, 0)";
    document.body.style.fontFamily = "sans-serif";
    bodyElement.style.backgroundColor = "white";
  }
}

white.addEventListener("click", () => {
  colorBlack = false;
  colorRed = false;
  colorPurple = false;
  colorWhite = true;
  paletaDeColores();
});

black.addEventListener("click", () => {
  colorBlack = true;
  colorRed = false;
  colorPurple = false;
  paletaDeColores();
});

red.addEventListener("click", () => {
  colorBlack = false;
  colorRed = true;
  colorPurple = false;
  paletaDeColores();
});

purple.addEventListener("click", () => {
  colorBlack = false;
  colorRed = false;
  colorPurple = true;
  paletaDeColores();
});
