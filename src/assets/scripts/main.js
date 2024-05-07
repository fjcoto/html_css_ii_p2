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

import Chart from 'chart.js/auto';

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

  // Init Chart
  const ctx = document.getElementById('chart').getContext('2d');
  const chart = new Chart(ctx, {
    type: 'pie',
    data: {
      labels: ['Granollers', 'Mollet del Vallès', 'La Garriga', 'Lliçà de Vallès', 'Parets del Vallès'],
      datasets: [{
        label: 'Participación por localidad en 2023',
        data: [12, 19, 3, 5, 2],
        backgroundColor: [
          'rgba(233, 30, 99, 0.8)',
          'rgba(33, 150, 243, 0.8)',
          'rgba(76, 175, 80, 0.8)',
          'rgba(255, 193, 7, 0.8)',
          'rgba(63, 81, 181, 0.8)'
        ],
        borderColor: [
          'rgba(255, 255, 255, 1)',
          'rgba(255, 255, 255, 1)',
          'rgba(255, 255, 255, 1)',
          'rgba(255, 255, 255, 1)',
          'rgba(255, 255, 255, 1)'
        ],
        borderWidth: 2
      }]
    },
    options: {
      responsive: false,
      plugins: {
        legend: {
          position: 'top',
        }
      }
    }
  });


});