/**
 * Import dependencies from node_modules
 * see commented examples below
 */

import * as bootstrap from 'bootstrap';

// import 'some-node-module';
// import SomeModule from 'some-node-module';

/**
 * Write any other JavaScript below
 */

/*
+( function() {
  const university = "UOC";
  console.log(`Hello, ${university}!`);
} )();
*/

document.addEventListener('DOMContentLoaded', function () {

  // Index selectors
  const overlay = document.querySelector('.overlay');

  // Header selectors
  const menuButton = document.querySelector('.header__menu-button');
  const navContainer = document.querySelector('.header__nav');
  const iconBar = document.querySelector('.fa-bars');
  const iconTimes = document.querySelector('.fa-times');

  function toggleMenu() {
    if (navContainer.style.transform === 'translateX(-100%)' || !navContainer.style.transform) {
      navContainer.style.transform = 'translateX(0%)';
      iconBar.style.display = 'none';
      iconTimes.style.display = 'block';
      overlay.style.display = 'block';
    } else {
      navContainer.style.transform = 'translateX(-100%)';
      iconBar.style.display = 'block';
      iconTimes.style.display = 'none';
      overlay.style.display = 'none';
    }

  }

  menuButton.addEventListener('click', toggleMenu);

  // Active menu option
  const path = window.location.pathname;
  const options = document.querySelectorAll('.header__nav-item > a');

  options.forEach(function (option) {
    if (option.getAttribute('href') === path) {
      option.classList.add('active');
    }

    if (path === '/detail.html') {
      options[1].classList.add('active');
    }

  });

});