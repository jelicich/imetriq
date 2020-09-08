/*! imetriq v1.0.0 | (c) 2020  | ISC License | git+https://github.com/jelicich/imetriq.git */
(function() {
    'use strict';

    /**
     * imetriq namespace
     * @namespace
     */

    const imetriq = window.imetriq = {


        init: function () {
            console.log('init!')
        }
    }


    window.onload = function() {
        // change this to increase/decrease difficulty
        
        imetriq.init();
    }
})();

console.log('component')