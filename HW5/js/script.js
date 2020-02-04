let mitems = document.querySelectorAll('.menu-item');
let mblock = document.querySelector('.menu');
let titl = document.getElementById('title');
let prt = document.querySelector('#prompt');

let fifel = document.createElement('li');
fifel.classList.add('menu-item');
fifel.innerText = 'Пятый пункт';

mitems[0].after(mitems[2]);
mblock.append(fifel);

document.body.style.backgroundImage = 'url(./img/apple_true.jpg)';

titl.innerHTML = 'Мы продаем только подлинную технику Apple';
document.querySelector('.column .adv').remove();

prt.innerHTML = prompt('What about Apple technics?', '');
