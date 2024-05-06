/**
 * Import dependencies from node_modules
 * see commented examples below
 */

import * as bootstrap from 'bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Swiper from 'swiper';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/swiper-bundle.css';

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
  // Init AOS
  AOS.init({
    once: true,
  });

  // Init Swiper
  const swiper = new Swiper('.swiper', {

    modules: [Navigation, Pagination, Autoplay],
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },

    pagination: {
      el: '.swiper-pagination',
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });

  // Active menu option
  const path = window.location.pathname;
  const options = document.querySelectorAll('.nav-link');

  options.forEach(function (option) {
    if ("/" + option.getAttribute('href') === path) {
      option.classList.add('active');
    }

  });

  // Init Tooltip
  const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
  const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

});