/**
 * Import dependencies from node_modules
 * see commented examples below
 */

import * as bootstrap from 'bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';

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
});