const pianoKeys = document.querySelectorAll(
  ".piano__key--white, .piano__key--black"
);
const volumeSlider = document.querySelector("#volume-slider");

let mapedKeys = [];
let volume=0.5;

const playTune = (key) => {
  const audio = new Audio(`src/tunes/${key}.wav`);
  audio.volume = volume;
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

const handleVolume = (event) => {
    volume = event.target.value;
}

volumeSlider.addEventListener("input", handleVolume);
