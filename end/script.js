let html = '';
let randomValue = () => Math.floor(Math.random() * 256);

function randomRGB(value) {
  const color = `rgb(${value()}, ${value()}, ${value()})`;
  return color;
}

for (let i = 1; i <= 10; i++) {
  html += `<div style="background: ${randomRGB(randomValue)}">${i}</div>`;
}

document.querySelector('main').innerHTML = html;