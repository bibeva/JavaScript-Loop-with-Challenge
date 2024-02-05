let html = '';
let red;
let green;
let blue;
let randomRGB;

red = Math.floor(Math.random() * 256);
green = Math.floor(Math.random() * 256);
blue = Math.floor(Math.random() * 256);
randomRGB = `rgb(${red}, ${green}, ${blue})`;
html += `<div style="background: ${randomRGB}">1</div>`;

red = Math.floor(Math.random() * 256);
green = Math.floor(Math.random() * 256);
blue = Math.floor(Math.random() * 256);
randomRGB = `rgb(${red}, ${green}, ${blue})`;
html += `<div style="background: ${randomRGB}">2</div>`;

red = Math.floor(Math.random() * 256);
green = Math.floor(Math.random() * 256);
blue = Math.floor(Math.random() * 256);
randomRGB = `rgb(${red}, ${green}, ${blue})`;
html += `<div style="background: ${randomRGB}">3</div>`;

red = Math.floor(Math.random() * 256);
green = Math.floor(Math.random() * 256);
blue = Math.floor(Math.random() * 256);
randomRGB = `rgb(${red}, ${green}, ${blue})`;
html += `<div style="background: ${randomRGB}">4</div>`;

document.querySelector('main').innerHTML = html;