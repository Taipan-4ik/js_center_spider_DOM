'use strict';

document.addEventListener('DOMContentLoaded', () => {
  spiderOnCenter();
});

function spiderOnCenter() {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  spider.style.position = 'static';
  wall.style.display = 'flex';
  wall.style.justifyContent = 'center';
  wall.style.alignItems = 'center';
}

spiderOnCenter();
