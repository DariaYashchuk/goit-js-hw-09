const refs = {
  startBtn: document.querySelector('[data-start]'),
  stopBtn: document.querySelector('[data-stop]'),
  body: document.querySelector('body'),
};

console.log(refs.body);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const colorSwitcher = {
  instervalID: null,
  isActive: false,
  start() {
    this.instervalID = setInterval(() => {
      refs.body.style.backgroundColor = getRandomHexColor();
      refs.startBtn.disabled = true;
      refs.stopBtn.disabled = false;
    }, 1000);
  },
  stop() {
    clearInterval(this.instervalID);
    refs.startBtn.disabled = false;
    refs.stopBtn.disabled = true;
  },
};

refs.stopBtn.disabled = true;
refs.startBtn.addEventListener('click', () => {
  colorSwitcher.start();
});
refs.stopBtn.addEventListener('click', () => {
  colorSwitcher.stop();
});
