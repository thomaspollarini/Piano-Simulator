const pianoKeys = document.querySelectorAll(
  ".piano__key--white, .piano__key--black"
);

let mapedKeys = [];

const playTune = (key) => {
  const audio = new Audio(`src/tunes/${key}.wav`);
  audio.play();

  clickedKey = document.querySelector(`[data-key="${key}"]`);
  clickedKey.classList.add("piano__key--active");
  setTimeout(() => {
    clickedKey.classList.remove("piano__key--active");
  }, 150);
};

pianoKeys.forEach((key) => {
  key.addEventListener("click", () => playTune(key.dataset.key));
  mapedKeys.push(key.dataset.key);
});

document.addEventListener("keydown", (event) => {
  if (mapedKeys.includes(event.key)) {
    playTune(event.key);
  }
});
