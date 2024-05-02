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
  const toggler = document.querySelector('.navbar-toggler');

  toggler.addEventListener('click', function(){

    const isExpanding = !document.getElementById('navbarNav').classList.contains('show');

    if(isExpanding){
      overlay.style.display = 'block';
    }else{
      overlay.style.display = 'none';
    }
      
  });

});